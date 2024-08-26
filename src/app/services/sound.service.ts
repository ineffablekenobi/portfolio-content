import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  playClickSound() {
    let audio = new Audio();
    audio.src = 'assets/mouse-click-sound-233951.mp3';
    audio.load();
    audio.play();
  }
}
