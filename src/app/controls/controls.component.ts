import { Component } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  showPopup = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
    console.log('clicked');
  }
}
