import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private audio: HTMLAudioElement | null = null;

  constructor() {
    if (typeof Audio !== 'undefined') {
      this.audio = new Audio('assets/mouse-click-sound-233951.mp3');
      this.audio.load();
    }
  }

  playClickSound() {
    if (this.audio) {
      this.audio.currentTime = 0;
      this.audio
        .play()
        .catch((error) => console.error('Error playing audio:', error));
    } else {
      console.warn('Audio playback is not supported in this environment');
    }
  }
}
