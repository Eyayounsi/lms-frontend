import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routes } from '../../../../shared/service/routes/routes';

type PreferenceChannel = 'general' | 'email';

interface NotificationPreference {
  key: string;
  title: string;
  description: string;
  enabled: boolean;
}

@Component({
    selector: 'app-instructor-setting-notifications',
    templateUrl: './instructor-setting-notifications.component.html',
    styleUrl: './instructor-setting-notifications.component.scss',
    imports : [CommonModule, FormsModule]
})
export class InstructorSettingNotificationsComponent {
  public routes = routes;
  public saving = false;
  public saveSuccess = '';

  public generalPreferences: NotificationPreference[] = [
    {
      key: 'student_questions',
      title: 'Questions etudiants',
      description: 'Notifier quand un etudiant pose une question dans Q&A.',
      enabled: true
    },
    {
      key: 'feedback_received',
      title: 'Feedback recu',
      description: 'Notifier quand un etudiant laisse un feedback sur vos cours.',
      enabled: true
    },
    {
      key: 'quiz_submission',
      title: 'Soumissions quiz/examen',
      description: 'Notifier lors des nouvelles soumissions de quiz ou examen.',
      enabled: true
    },
    {
      key: 'forum_activity',
      title: 'Activite forum',
      description: 'Notifier pour les nouveaux posts et reponses des forums.',
      enabled: false
    }
  ];

  public emailPreferences: NotificationPreference[] = [
    {
      key: 'course_enrolment',
      title: 'Nouvelle inscription',
      description: 'Envoyer un e-mail a chaque nouvelle inscription.',
      enabled: true
    },
    {
      key: 'assignment_submission',
      title: 'Soumission devoir',
      description: 'Envoyer un e-mail a chaque devoir soumis.',
      enabled: true
    },
    {
      key: 'course_comments',
      title: 'Commentaires de cours',
      description: 'Envoyer un e-mail pour les nouveaux commentaires.',
      enabled: false
    },
    {
      key: 'course_reminders',
      title: 'Rappels cours',
      description: 'Envoyer des rappels des sessions planifiees.',
      enabled: false
    },
    {
      key: 'system_updates',
      title: 'Mises a jour plateforme',
      description: 'Envoyer les communications importantes du systeme.',
      enabled: true
    }
  ];

  private readonly storageKey = 'instructor_notification_preferences_v1';

  constructor() {
    this.loadPreferences();
  }

  toggleAll(channel: PreferenceChannel): void {
    const target = channel === 'general' ? this.generalPreferences : this.emailPreferences;
    const shouldEnableAll = target.some((item) => !item.enabled);
    target.forEach((item) => {
      item.enabled = shouldEnableAll;
    });
  }

  savePreferences(): void {
    this.saving = true;
    this.saveSuccess = '';

    const payload = {
      general: this.generalPreferences,
      email: this.emailPreferences
    };

    try {
      localStorage.setItem(this.storageKey, JSON.stringify(payload));
      this.saveSuccess = 'Preferences enregistrees avec succes.';
    } finally {
      this.saving = false;
      setTimeout(() => {
        this.saveSuccess = '';
      }, 2500);
    }
  }

  private loadPreferences(): void {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return;

    try {
      const data = JSON.parse(raw) as { general?: NotificationPreference[]; email?: NotificationPreference[] };
      this.generalPreferences = this.mergeWithDefaults(this.generalPreferences, data.general);
      this.emailPreferences = this.mergeWithDefaults(this.emailPreferences, data.email);
    } catch {
      // Keep defaults if parsing fails.
    }
  }

  private mergeWithDefaults(defaults: NotificationPreference[], saved?: NotificationPreference[]): NotificationPreference[] {
    if (!Array.isArray(saved) || saved.length === 0) {
      return defaults;
    }

    const map = new Map(saved.map((item) => [item.key, item.enabled]));
    return defaults.map((item) => ({
      ...item,
      enabled: map.has(item.key) ? Boolean(map.get(item.key)) : item.enabled
    }));
  }
}
