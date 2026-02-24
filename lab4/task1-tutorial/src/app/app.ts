import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  items: string[] = [];                    // ← И ЭТУ СТРОКУ ДОБАВЬ (массив для хранения черепашек)

  addItem(item: string) {                  // ← И ЭТУ ФУНКЦИЮ ДОБАВЬ
    this.items.push(item);                  // добавляем черепашку в массив
  }
}
