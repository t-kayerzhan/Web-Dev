import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryList } from './category/category-list/category-list';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryList, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  categories = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  selectedCategoryId: number | null = null;

  products = [
  // ========== Смартфоны (categoryId: 1) ==========
  // ========== Смартфоны (categoryId: 1) ==========
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
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/',
  likes: 0,
  categoryId: 1
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
  link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
  likes: 0,
  categoryId: 1
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
  link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
  likes: 0,
  categoryId: 1
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
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-oranzhevyi-145468241/',
  likes: 0,
  categoryId: 1
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
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/',
  likes: 0,
  categoryId: 1
},

  // ========== Ноутбуки (categoryId: 2) ==========
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Air 13 M1',
    description: '13.3" Retina, Apple M1, 8 ГБ ОЗУ, 256 ГБ SSD',
    price: 340000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h55/h13/64509322952734.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 7,
    name: 'Ноутбук ASUS ROG Strix G16',
    description: '16" IPS, Intel Core i7, 16 ГБ ОЗУ, RTX 4060',
    price: 520000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h9f/84907981046238.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/h9f/84907981046238.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/h90/84907981079006.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-g614jv-n4009-chernyi-116043581/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: 'Ноутбук Lenovo Legion 5 Pro',
    description: '16" IPS, AMD Ryzen 7, 16 ГБ ОЗУ, RTX 4060',
    price: 480000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/ha1/84907981309982.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha0/ha1/84907981309982.jpg','https://resources.cdn-kaspi.kz/img/m/p/ha1/ha2/84907981342750.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-16arh8-82wm00d5rk-seryi-116043582/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 9,
    name: 'Ноутбук Dell XPS 15',
    description: '15.6" OLED, Intel Core i9, 32 ГБ ОЗУ, RTX 4070',
    price: 890000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/ha3/84907981573790.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha2/ha3/84907981573790.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/ha4/84907981606558.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/dell-xps-15-9530-chernyi-116043583/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 10,
    name: 'Ноутбук HP Spectre x360',
    description: '13.5" OLED сенсорный, Intel Core i7, 16 ГБ ОЗУ',
    price: 450000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha4/ha5/84907981839390.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha4/ha5/84907981839390.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/ha5/ha6/84907981872158.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/hp-spectre-x360-16-seryi-116043584/',
    likes: 0,
    categoryId: 2
  },

  // ========== Наушники (categoryId: 3) ==========
  {
    id: 11,
    name: 'Наушники Apple AirPods Pro 2',
    description: 'Беспроводные, активное шумоподавление, адаптивный эквалайзер',
    price: 120000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h75/84908273057822.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb0/h75/84908273057822.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h7a/84908273090590.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-113677291/',
    likes: 0,
    categoryId: 3
  },
  {
    id: 12,
    name: 'Наушники Sony WH-1000XM5',
    description: 'Беспроводные, шумоподавление, 30 часов работы',
    price: 130000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hb2/84908273323358.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb1/hb2/84908273323358.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb2/hb3/84908273356126.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-113677292/',
    likes: 0,
    categoryId: 3
  },
  {
    id: 13,
    name: 'Наушники JBL Tune 760NC',
    description: 'Беспроводные, шумоподавление, 35 часов',
    price: 45000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/hb4/84908273588958.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/hb4/84908273588958.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb4/hb5/84908273621726.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/jbl-tune-760nc-chernyi-113677293/',
    likes: 0,
    categoryId: 3
  },
  {
    id: 14,
    name: 'Наушники Marshall Major IV',
    description: 'Беспроводные, 80 часов, беспроводная зарядка',
    price: 55000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/hb6/84908273854494.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb5/hb6/84908273854494.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb6/hb7/84908273887262.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-113677294/',
    likes: 0,
    categoryId: 3
  },
  {
    id: 15,
    name: 'Наушники Xiaomi Redmi Buds 4 Pro',
    description: 'Беспроводные, шумоподавление, 36 часов',
    price: 25000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hb8/84908274120030.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb7/hb8/84908274120030.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/hb9/84908274152798.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-4-pro-belyi-113677295/',
    likes: 0,
    categoryId: 3
  },

  // ========== Планшеты (categoryId: 4) ==========
  {
    id: 16,
    name: 'Планшет Apple iPad ',
    description: 'A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб розовый',
    price: 203997,rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pad/p8c/37011948.png?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=353220100',
    likes: 0,
    categoryId: 4
  },
  {
    id: 17,
    name: 'Планшет Xiaomi ',
    description: 'Redmi Pad 2 11 дюйм 8 Гб/256 Гб фиолетовый',
    price: 109969,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/pcc/81439394.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pac/p3a/46204530.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hc2/hc3/84908274683870.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-fioletovyi-140639755/?c=353220100',
    likes: 0,
    categoryId: 4
  },
  {
    id: 18,
    name: 'Планшет Xiaomi Pad 6',
    description: '11" IPS, Snapdragon 870, 6 ГБ ОЗУ, 128 ГБ',
    price: 130000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p19/pb7/109050903.jpeg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc3/hc4/84908274916638.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc4/hc5/84908274949406.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/airstar-g2000-10-djuim-16-gb-512-gb-chernyi-124333904/?c=353220100',
    likes: 0,
    categoryId: 4
  },
  {
    id: 19,
    name: 'Планшет Lenovo Tab P12',
    description: '12.7" IPS, MediaTek Dimensity, 8 ГБ ОЗУ, 128 ГБ',
    price: 150000,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/hc6/84908275182174.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc5/hc6/84908275182174.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc6/hc7/84908275214942.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-128gb-wi-fi-seryi-113677299/',
    likes: 0,
    categoryId: 4
  },
  {
    id: 20,
    name: 'Планшет Huawei MatePad 11',
    description: '11" IPS, Snapdragon 865, 6 ГБ ОЗУ, 128 ГБ',
    price: 140000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/hc8/84908275447710.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc7/hc8/84908275447710.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/hc9/84908275480478.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/huawei-matepad-11-128gb-wi-fi-seryi-113677300/',
    likes: 0,
    categoryId: 4
  }
];

  onCategorySelect(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts() {
    if (!this.selectedCategoryId) return [];
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }
}