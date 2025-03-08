import { Component, Input } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  favorites: Product[] = [];

  onToggleFavorite(product: Product) {
    if (this.isFavorite(product)) {
      this.favorites = this.favorites.filter(p => p.id !== product.id);
    } else {
      this.favorites.push(product);
    }
  }

  isFavorite(product: Product): boolean {
    return this.favorites.some(p => p.id === product.id);
  }
}