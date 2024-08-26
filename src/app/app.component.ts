import { Component } from '@angular/core';
import { SoundService } from './services/sound.service';
import { EventBusService } from './services/event-bus.service';
import { EVENT_NAMES } from './constants/event-constants';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Swapnil Sharma Sarker - Enosis';

  private subscriptions: Subscription;

  constructor(
    private soundService: SoundService,
    private eventBusService: EventBusService,
    private router: Router
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

  onCloseClick() {
    this.soundService.playClickSound();
    //window.location.href = '/'; // Assuming the root is at the base URL
    this.router.navigate([`/`]);
  }
}
