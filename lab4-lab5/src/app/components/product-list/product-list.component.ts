import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  localProducts: Product[] = [];

  ngOnChanges(): void {
    this.localProducts = [...this.products];
  }

  onDeleteProduct(productId: number): void {
    this.localProducts = this.localProducts.filter(p => p.id !== productId);
  }
}
