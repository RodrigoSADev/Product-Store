import { Component, ViewChild, inject, signal } from '@angular/core';
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
  @ViewChild(FilterComponent) filterComponent!: FilterComponent;

  products = signal<Product[]>(
    inject(ActivatedRoute).snapshot.data['products']
  );

  productService = inject(ProductsService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);
  categoryService = inject(CategoryService);

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialogService
      .openDeleteDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productService.delete(product.id).subscribe(() => {
          this.filterComponent.resetFilter();
          this.loadProducts();
        });
      });
  }

  onCategoryFilter(category: string) {
    if (category) {
      this.productService
        .getByCategory(category)
        .subscribe((products) => this.products.set(products));
    } else {
      this.loadProducts();
    }
  }

  loadProducts() {
    this.productService
      .getAll()
      .subscribe((products) => this.products.set(products));
  }
}
