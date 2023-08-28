// popup-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css'],
})
export class PopupFormComponent {
  formData = {
    name: '',
    email: '',
  };

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
  }
}
