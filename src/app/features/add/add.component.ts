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
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  formBuild = inject(FormBuilder);
  productService = inject(ProductsService);

  addForm: FormGroup = this.formBuild.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
  });

  onSubmit() {
    this.productService
      .add({
        title: this.addForm.value.title,
        description: this.addForm.value.description,
        price: this.addForm.value.price,
      })
      .subscribe(() => {
        alert('Sucesso');
      });
  }
}
