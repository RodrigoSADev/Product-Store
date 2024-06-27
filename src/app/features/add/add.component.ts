import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Product } from '../../interfaces/product';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormComponent, RouterLink, MatButtonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  productService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(product: Product) {
    this.productService.add(product).subscribe(() => {
      this.matSnackBar.open('Produto adicionado com sucesso!', 'Ok');
      this.router.navigateByUrl('/');
    });
  }
}
