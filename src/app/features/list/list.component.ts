import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../interfaces/product';
import { CardComponent } from '../card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products: Product[] = [];

  productService = inject(ProductsService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
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
            this.products = products;
          });
        });
      });
  }
}
