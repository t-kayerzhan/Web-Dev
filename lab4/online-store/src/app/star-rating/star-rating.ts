import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.html',
  styleUrls: ['./star-rating.css']
})
export class StarRating {
  @Input() rating: number = 0;
  
  stars: number[] = [1, 2, 3, 4, 5];
  
  isFullStar(star: number): boolean {
    return star <= Math.floor(this.rating);
  }
  
  isHalfStar(star: number): boolean {
    return star === Math.ceil(this.rating) && !Number.isInteger(this.rating);
  }
}