import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../interfaces/product';
import { FilterComponent } from '../filter/filter.component';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { MatCardModule } from '@angular/material/card';
import { filter } from 'rxjs';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    FilterComponent,
    CardComponent,
    RouterLink,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products = signal<Product[]>(
    inject(ActivatedRoute).snapshot.data['products']
  );

  categories: string[] = [];
  filteredProducts: Product[] = [];

  productService = inject(ProductsService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);
  categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.filteredProducts = this.products();
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialogService
      .openDeleteDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productService.delete(product.id).subscribe(() => {
          this.productService.getAll().subscribe((products) => {
            this.products.set(products);
          });
        });
      });
  }

  onFilter(category: string) {
    if (category) {
      this.filteredProducts = this.products().filter(
        (product) => product.category === category
      );
    } else {
      this.filteredProducts = this.products();
    }
  }
}
