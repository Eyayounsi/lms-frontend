import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { apiResultFormat, instructorAnnouncement } from '../../../shared/models/model';
import { FormsModule } from '@angular/forms';
import { PaginationService, pageSelection, tablePageSize } from '../../../shared/service/custom-pagination/pagination.service';
import { DataService } from '../../../shared/service/data/data.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
    selector: 'app-instructor-announcements',
    templateUrl: './instructor-announcements.component.html',
    styleUrl: './instructor-announcements.component.scss',
    imports:[CommonModule,MatTableModule,MatSortModule,MatPaginatorModule,MatSelectModule,FormsModule]
})
export class InstructorAnnouncementsComponent {
  public routes = routes;
 
   // pagination variables
   public pageSize = 10;
   public tableData: instructorAnnouncement[] = [];
   public tableDataCopy: instructorAnnouncement[] = [];
   public actualData: instructorAnnouncement[] = [];
   public currentPage = 1;
   public skip = 0;
   public limit: number = this.pageSize;
   public serialNumberArray: number[] = [];
   public totalData = 0;       
   public pageSelection: pageSelection[] = [];
   dataSource!: MatTableDataSource<instructorAnnouncement>;
   public searchDataValue = '';
   constructor(
     private data: DataService,
     private router: Router,
     private pagination: PaginationService
   ) {
     this.data.getInstructorAnnouncement().subscribe((apiRes: apiResultFormat) => {
       this.actualData = apiRes.data;
       this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
         if (this.router.url == this.routes.instructorAnnouncements) {
           this.getTableData({ skip: res.skip, limit: res.limit });
           this.pageSize = res.pageSize;
         }
       });
     });
   }
   private getTableData(pageOption: pageSelection): void {
     this.data.getInstructorAnnouncement().subscribe((apiRes: apiResultFormat) => {
       this.tableData = [];
       this.tableDataCopy = [];
       this.serialNumberArray = [];
       this.totalData = apiRes.totalData;
       apiRes.data.map((res: instructorAnnouncement, index: number) => {
         const serialNumber = index + 1;
         if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
           res.sNo = serialNumber;
           this.tableData.push(res);
           this.tableDataCopy.push(res);
           this.serialNumberArray.push(serialNumber);
         }
       });
       this.dataSource = new MatTableDataSource<instructorAnnouncement>(this.actualData);
       this.pagination.calculatePageSize.next({
         totalData: this.totalData,
         pageSize: this.pageSize,
         tableData: this.tableData,
         tableDataCopy: this.tableDataCopy,
         serialNumberArray: this.serialNumberArray,
       });
     });
   }
 
   public searchData(value: string): void {
     if (value == '') {
       this.tableData = this.tableDataCopy;
     } else {
       this.dataSource.filter = value.trim().toLowerCase();
       this.tableData = this.dataSource.filteredData;
     }
   }
 
   public sortData(sort: Sort) {
     const data = this.tableData.slice();
 
     if (!sort.active || sort.direction === '') {
       this.tableData = data;
     } else {
       this.tableData = data.sort((a, b) => {
         const aValue = (a as never)[sort.active];
 
         const bValue = (b as never)[sort.active];
         return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
       });
     }
   }
   public changePageSize(pageSize: number): void {
     this.pageSelection = [];
     this.limit = pageSize;
     this.skip = 0;
     this.currentPage = 1;
     this.pagination.tablePageSize.next({
       skip: this.skip,
       limit: this.limit,
       pageSize: this.pageSize,
     });
   }
}
