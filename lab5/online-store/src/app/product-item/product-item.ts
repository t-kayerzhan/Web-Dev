import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItem {
  @Input() product: any;
  @Output() deleteProduct = new EventEmitter<number>();

  encodeURIComponent = encodeURIComponent;

  onLike() {
    this.product.likes++;
  }

  onDelete() {
    this.deleteProduct.emit(this.product.id);
  }
}