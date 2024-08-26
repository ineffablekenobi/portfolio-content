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
      title: 'Software Engineer',
      year: 'December 2023 - Present',
      logo: 'assets/enosis-logo.png',
      location: 'Dhaka, Bangladesh',
      description:
        'Currently, I am a Software Engineer at Enosis Solutions, specializing in full-stack development with a strong focus on backend technologies. My preferred language is Java, where I excel in creating robust and scalable solutions',
    },
    // Add more experiences as needed
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
