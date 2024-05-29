import { Component, Input } from '@angular/core';
import { Tray } from '../../models/tray.model';

@Component({
  selector: 'app-tray-share',
  templateUrl: './tray-share.component.html',
  styleUrls: ['./tray-share.component.scss']
})
export class TrayShareComponent {

  @Input() tray!: Tray;

  showConsoleText() {
    console.log(this.tray.text);
  }
}
