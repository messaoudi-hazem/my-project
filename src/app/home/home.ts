import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  v1: string = 'interpolation';
  v2: string = 'favicon.ico';
  send() {
    alert('button clicked');
  }
  email: string = '';
  a: number = 5;
  students = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }, { name: 'Diana' }];

  day: string = 'sunday ';
  today = new Date();
}
