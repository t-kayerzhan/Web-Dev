import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
  imports: [NgOptimizedImage]  
})
export class User {
  name = input.required<string>();
  username = 'youngTech';
  logoUrl = 'logo.svg';  // тоже без /
  logoAlt = 'Angular logo';
}