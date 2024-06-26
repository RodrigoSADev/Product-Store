import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
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
