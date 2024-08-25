import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  private timer: any;

  ngOnInit() {
    console.log('ngOnInit started');
    this.updateTime();
    // this.timer = setInterval(() => {
    //   this.updateTime();
    // }, 1000);
    console.log('ngOnInit completed');
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateTime() {
    this.currentTime = new Date();
  }
}