import { Component } from '@angular/core';

@Component({
  selector: 'app-vetrina',
  templateUrl: './vetrina.component.html',
  styleUrls: ['./vetrina.component.css']
})
export class VetrinaComponent {

  constructor() { }

  goToLogin() {
    window.location.href = '/login';
  }
}
