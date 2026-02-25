import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.html',
  styleUrls: ['./product-gallery.css']
})
export class ProductGallery {
  @Input() images: string[] = [];
  selectedImage: string = '';

  ngOnInit() {
    if (this.images.length > 0) {
      this.selectedImage = this.images[0];
    }
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  nextImage() {
    const currentIndex = this.images.indexOf(this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[nextIndex];
  }

  prevImage() {
    const currentIndex = this.images.indexOf(this.selectedImage);
    const prevIndex = (currentIndex - 1 + this.images.length) % this.images.length;
    this.selectedImage = this.images[prevIndex];
  }
}