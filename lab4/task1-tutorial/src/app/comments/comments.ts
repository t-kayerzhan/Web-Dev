import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.html',
  styleUrls: ['./comments.css']
})
export class Comments {
  comments = [
    { id: 1, text: 'Angular is awesome!', author: 'John' },
    { id: 2, text: 'I love defer syntax', author: 'Jane' }
  ];
}