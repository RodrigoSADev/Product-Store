import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  formBuild = inject(FormBuilder);
  productService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  editForm: FormGroup = this.formBuild.group({
    title: [this.product.title, [Validators.required]],
    description: [this.product.description, [Validators.required]],
    price: [this.product.price, [Validators.required]],
  });

  onSubmit() {
    this.productService
      .update(this.product.id, {
        title: this.editForm.value.title,
        description: this.editForm.value.description,
        price: this.editForm.value.price,
      })
      .subscribe(() => {
        this.matSnackBar.open('Produto alterado com sucesso!', 'Ok');
        this.router.navigateByUrl('/');
      });
  }
}
