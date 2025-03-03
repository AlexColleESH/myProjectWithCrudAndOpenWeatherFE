import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vetrina',
  templateUrl: './vetrina.component.html',
  styleUrls: ['./vetrina.component.css']
})
export class VetrinaComponent {

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
