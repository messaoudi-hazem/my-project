import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']);
  }

  goSuggestions() {
    this.router.navigate(['/suggestions']);
  }
}
