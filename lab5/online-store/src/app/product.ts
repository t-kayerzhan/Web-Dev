export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  likes: number;        // ← новое поле для лайков
  categoryId: number;    // ← новое поле для связи с категорией
}