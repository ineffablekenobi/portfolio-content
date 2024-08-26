import { Component } from '@angular/core';
import { SoundService } from '../services/sound.service';
import { EventBusService } from '../services/event-bus.service';
import { EVENT_NAMES } from '../constants/event-constants';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss',
})
export class WindowComponent {
  constructor(private eventBus: EventBusService) {}

  playClickSound(): void {
    this.eventBus.cast(EVENT_NAMES.CLICK);
  }

  onDowloadClick(): void {
    this.playClickSound();
    window.open('assets/Swapnil-Sharma-Sarker-Resume.pdf', '_blank');
  }
}
