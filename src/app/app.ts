import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  currentView: 'home' | 'suggestions' = 'home';

  showHome() {
    this.currentView = 'home';
  }

  showSuggestions() {
    this.currentView = 'suggestions';
  }
}
