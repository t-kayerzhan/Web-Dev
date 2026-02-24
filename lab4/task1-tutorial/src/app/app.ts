import { Component } from '@angular/core';
import { Comments } from './comments/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Comments]
})
export class App {
  // никаких дополнительных данных не нужно
}