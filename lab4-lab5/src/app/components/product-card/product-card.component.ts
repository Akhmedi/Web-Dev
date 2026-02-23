import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  selectedImageIndex = 0;

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  previousImage(): void {
    this.selectedImageIndex = this.selectedImageIndex > 0
      ? this.selectedImageIndex - 1
      : this.product.images.length - 1;
  }

  nextImage(): void {
    this.selectedImageIndex = this.selectedImageIndex < this.product.images.length - 1
      ? this.selectedImageIndex + 1
      : 0;
  }

  getStarArray(): boolean[] {
    const stars = [];
    const fullStars = Math.floor(this.product.rating);
    const hasHalfStar = this.product.rating % 1 !== 0;
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars || (i === fullStars && hasHalfStar));
    }
    return stars;
  }

  onLike(): void {
    this.product.likes++;
  }

  onDelete(): void {
    this.deleteProduct.emit(this.product.id);
  }

  shareOnWhatsApp(): void {
    const message = `Посмотрите на этот продукт: ${this.product.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message + '\n' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  openProductLink(): void {
    window.open(this.product.link, '_blank');
  }
}
