import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private events: { [key: string]: Subject<any> } = {};

  // Cast an event with a specific name and data
  cast(eventName: string, data?: any) {
    if (!this.events[eventName]) {
      this.events[eventName] = new Subject<any>();
    }
    this.events[eventName].next(data);
  }

  // Listen to an event with a specific name
  listen(eventName: string) {
    if (!this.events[eventName]) {
      this.events[eventName] = new Subject<any>();
    }
    return this.events[eventName].asObservable();
  }
}
