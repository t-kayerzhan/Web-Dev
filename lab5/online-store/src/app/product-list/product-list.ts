import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  @Input() products: any[] = [];

  onDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}