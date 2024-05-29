import { Component, HostListener } from '@angular/core';
import { Tray } from './models/tray.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('openClose', [
    state('open', style({
      height: 'auto'
    })),
    state('closed', style({
      height: '1px'
    })),
    transition('open => closed', [
      animate('0.3s')
    ]),
    transition('closed => open', [
      animate('0.2s')
    ]),
  ]),
  ],
})
export class AppComponent {
  sharedTrayShow: boolean = true;

  @HostListener('window:keyup', ['$event'])
  onSpaceUp(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.toggleSharedTray();
    }
  }

  trayShared: Tray[] = [
    {
      icon: 'P',
      text: 'Photo'
    },
    {
      icon: 'Pr',
      text: 'Profile'
    },
    {
      icon: 'C',
      text: 'Chat'
    },
    {
      icon: 'S',
      text: 'Share'
    }
  ];

  toggleSharedTray() {
    this.sharedTrayShow = !this.sharedTrayShow;
  }
}
