import { Component } from '@angular/core';
import { SoundService } from './services/sound.service';
import { EventBusService } from './services/event-bus.service';
import { EVENT_NAMES } from './constants/event-constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Swapnil Sharma Sarker - Enosis';

  private subscriptions: Subscription;

  onCloseClick() {
    window.location.href = '/'; // Assuming the root is at the base URL
  }

  constructor(
    private soundService: SoundService,
    private eventBusService: EventBusService
  ) {
    this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.eventBusService.listen(EVENT_NAMES.CLICK).subscribe(() => {
        this.soundService.playClickSound();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
