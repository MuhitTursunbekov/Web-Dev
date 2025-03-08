import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  // Добавьте сюда другие свойства вашего продукта
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Input() isFavorite: boolean = false;
  @Output() toggleFavorite = new EventEmitter<Product>();

  onToggleFavorite() {
    if (this.product) {
      this.toggleFavorite.emit(this.product);
    }
  }
}