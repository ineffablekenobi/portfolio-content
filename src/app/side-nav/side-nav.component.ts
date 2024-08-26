import { Component } from '@angular/core';
import { EventBusService } from '../services/event-bus.service';
import { EVENT_NAMES } from '../constants/event-constants';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  constructor(private eventBus: EventBusService) {}

  playClickSound() {
    this.eventBus.cast(EVENT_NAMES.CLICK);
  }
}
