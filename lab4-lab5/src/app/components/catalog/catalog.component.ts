
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Добавили роут
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute // Внедряем сервис для чтения URL
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.checkQueryParams();
  }

  private loadData(): void {
    this.categories = this.productService.getCategories();
    this.products = this.productService.products;

    // Изначально показываем все товары или первую категорию
    if (!this.selectedCategory) {
      this.filteredProducts = this.products;
    }
  }

  private checkQueryParams(): void {
    // Подписываемся на queryParams (?category=id)
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category'];
      if (categoryId) {
        // Ищем объект категории в нашем списке по ID из URL
        const categoryToSelect = this.categories.find(c => c.id === categoryId);
        if (categoryToSelect) {
          this.selectCategory(categoryToSelect);
        }
      }
    });
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.filteredProducts = this.productService.getProductsByCategory(category.id);
  }
}
