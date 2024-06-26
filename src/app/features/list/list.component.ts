import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products: Product[] = [];

  productService = inject(ProductsService);

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}
