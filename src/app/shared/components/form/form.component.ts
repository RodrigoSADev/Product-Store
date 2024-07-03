import { Component, EventEmitter, Output, inject, input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  product = input<Product | null>(null);
  formBuild = inject(FormBuilder);
  categoryService = inject(CategoryService);
  form!: FormGroup;
  categories: string[] = [];
  @Output() done = new EventEmitter<Product>();

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.form = this.formBuild.group({
      name: [
        this.product()?.name,
        [Validators.required, Validators.minLength(3)],
      ],
      description: [
        this.product()?.description,
        [Validators.required, Validators.minLength(5)],
      ],
      price: [
        this.product()?.price,
        [
          Validators.required,
          Validators.pattern(/^(?!.*[.,\s]$)(?!^[.,\s])[0-9.,]+$/),
        ],
      ],
      quantity: [
        this.product()?.quantity,
        [Validators.required, Validators.pattern(/^[0-9]+$/)],
      ],
      category: [this.product()?.category, [Validators.required]],
    });
  }

  onSubmit() {
    const product = this.form.value as Product;
    if (this.form.valid) {
      this.done.emit(product);
    }
  }
}
