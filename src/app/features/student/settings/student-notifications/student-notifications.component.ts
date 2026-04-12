import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const STORAGE_KEY = 'student_notification_prefs';

interface NotifPrefs {
  // Notifications générales
  studentQuestions: boolean;
  feedbackReceived: boolean;
  quizResults: boolean;
  forumActivity: boolean;
  // Notifications email
  courseEnrolment: boolean;
  assignmentSubmission: boolean;
  courseComments: boolean;
  courseReminders: boolean;
}

const DEFAULTS: NotifPrefs = {
  studentQuestions: true,
  feedbackReceived: true,
  quizResults: false,
  forumActivity: false,
  courseEnrolment: true,
  assignmentSubmission: true,
  courseComments: false,
  courseReminders: false
};

@Component({
    selector: 'app-student-notifications',
    templateUrl: './student-notifications.component.html',
    styleUrl: './student-notifications.component.scss',
    imports: [CommonModule, FormsModule]
})
export class StudentNotificationsComponent implements OnInit {

  prefs: NotifPrefs = { ...DEFAULTS };
  saved = false;

  ngOnInit(): void {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { this.prefs = { ...DEFAULTS, ...JSON.parse(raw) }; }
      catch { /* ignore */ }
    }
  }

  onToggle(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.prefs));
    this.saved = true;
    setTimeout(() => this.saved = false, 2000);
  }

  toggleAllGeneral(): void {
    const allOn = this.prefs.studentQuestions && this.prefs.feedbackReceived &&
                  this.prefs.quizResults && this.prefs.forumActivity;
    this.prefs.studentQuestions    = !allOn;
    this.prefs.feedbackReceived    = !allOn;
    this.prefs.quizResults         = !allOn;
    this.prefs.forumActivity       = !allOn;
    this.onToggle();
  }

  toggleAllEmail(): void {
    const allOn = this.prefs.courseEnrolment && this.prefs.assignmentSubmission &&
                  this.prefs.courseComments && this.prefs.courseReminders;
    this.prefs.courseEnrolment      = !allOn;
    this.prefs.assignmentSubmission = !allOn;
    this.prefs.courseComments       = !allOn;
    this.prefs.courseReminders      = !allOn;
    this.onToggle();
  }
}

