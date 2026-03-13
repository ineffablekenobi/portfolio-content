import { Component } from '@angular/core';
import { SoundService } from '../services/sound.service';
import { EventBusService } from '../services/event-bus.service';
import { Subscription } from 'rxjs';
import { EVENT_NAMES } from '../constants/event-constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences = [
    {
      institution: 'Enosis Solutions',
      title: 'Senior Software Engineer',
      year: 'Sep 2025 - Present',
      logo: 'assets/enosis-logo.png',
      location: 'Dhaka, Bangladesh',
      descriptionBullets: [
        'Lead code reviews and set code-quality expectations to improve delivery and reduce defects',
        'Established development policies with QA and Dev teams to improve cross-team clarity and reduce rework',
        'Guided and executed database migrations and platform version upgrades, minimizing downtime and data risk',
        'Recovered production-impacting mistakes in GitHub (branch/merge recovery, hotfix workflows) and documented recovery processes for the team',
        'Anticipated major requirement and feasibility issues, enabling early resolutions that prevented critical development-stage problems'
      ]
    },
    {
      institution: 'Enosis Solutions',
      title: 'Software Engineer',
      year: 'Dec 2023 - Aug 2025',
      logo: 'assets/enosis-logo.png',
      location: 'Dhaka, Bangladesh',
      descriptionBullets: [
        'Designed and implemented scalable microservices using Spring Boot; applied patterns such as Builder, Facade, Chain of Responsibility, and Unit of Work',
        'Automated CI/CD pipelines using Jenkins, ArgoCD and Kubernetes to ensure repeatable, reliable deployments',
        'Developed and maintained RESTful APIs (RestEasy); integrated AWS services including S3 and DynamoDB for cloud data management',
        'Improved concurrency and transaction management across services, enhancing reliability and performance',
        'Collaborated with cross-functional teams to troubleshoot production issues, implement schedulers/cron jobs, and deliver reusable libraries'
      ]
    }
  ];

  constructor(private eventBus: EventBusService) {}

  playClickSound(): void {
    this.eventBus.cast(EVENT_NAMES.CLICK);
  }

  redirectToInstitution(): void {
    this.playClickSound();
    const url = 'https://www.enosisbd.com/';
    window.open(url, '_blank'); // Opens the URL in a new tab
  }
}
