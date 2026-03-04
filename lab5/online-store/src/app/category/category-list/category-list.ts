import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.html',
  styleUrls: ['./category-list.css']
})
export class CategoryList {
  @Input() categories: any[] = [];
  @Input() selectedCategoryId: number | null = null;
  @Output() selectCategory = new EventEmitter<number>();

  onSelect(id: number) {
    this.selectCategory.emit(id);
  }
}