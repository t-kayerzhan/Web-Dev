import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';  
import { ProductGallery } from '../product-gallery/product-gallery';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductGallery, StarRating],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  // Для кнопки поделиться
  encodeURIComponent = encodeURIComponent;

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro в цвете Cosmic Orange (оранжевый) с 256 ГБ встроенной памяти — флагман 2025 года с 6,3-дюймовым дисплеем Super Retina XDR (120 Гц).',
      price: 771806,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Apple iPhone 15 128GB (Black) — флагманский смартфон 2023 года с 6,1-дюймовым OLED-дисплеем Super Retina XDR, процессором A16 Bionic.',
      price: 389868,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 128GB (Black) — флагманский смартфон 2021 года с 6,1-дюймовым OLED-дисплеем Super Retina XDR, процессором A15 Bionic.',
      price: 305000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro Max в цвете Cosmic Orange (оранжевый) с 256 ГБ встроенной памяти — флагман 2025 года с 6,7-дюймовым дисплеем Super Retina XDR.',
      price: 819585,
      rating: 3.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/'
    },
    {
      id: 5,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb темно-синий',
      description: 'Apple iPhone 17 Pro в цвете Midnight Blue (темно-синий) с 256 ГБ встроенной памяти — флагман 2025 года.',
      price: 739440,
      rating: 4.9, 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p7a/64463536.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/'
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Apple iPhone 16 128GB (Black) — флагманский смартфон 2024 года с 6,1-дюймовым OLED-дисплеем Super Retina XDR.',
      price: 449750,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/'
    },
    {
      id: 7,
      name: 'Смартфон Apple iPhone 13 128Gb белый',
      description: 'Apple iPhone 13 128GB (White) — флагманский смартфон 2021 года с 6,1-дюймовым OLED-дисплеем.',
      price: 315284,
      rating: 3.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/'
    },
    {
      id: 8,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb серебристый',
      description: 'Apple iPhone 17 Pro в цвете Silver (серебристый) с 256 ГБ встроенной памяти.',
      price: 778456,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd4/p66/64464588.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-serebristyi-145467562/'
    },
    {
      id: 9,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb серебристый',
      description: 'Apple iPhone 17 Pro Max в цвете Silver (серебристый) с 256 ГБ встроенной памяти.',
      price: 848835,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/pb0/64475614.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/'
    },
    {
      id: 10,
      name: 'Смартфон Apple iPhone 17 Pro Max 256Gb темно-синий',
      description: 'Apple iPhone 17 Pro Max в цвете Midnight Blue (темно-синий) с 256 ГБ встроенной памяти.',
      price: 794400,
      rating: 2.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p0f/64476280.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-temno-sinii-145440732/'
    }
  ];
}