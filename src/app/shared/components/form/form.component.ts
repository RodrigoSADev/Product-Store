import { Component, EventEmitter, Output, inject, input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../../interfaces/product';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  product = input<Product | null>(null);
  formBuild = inject(FormBuilder);
  form!: FormGroup;
  @Output() done = new EventEmitter<Product>();

  ngOnInit(): void {
    this.form = this.formBuild.group({
      title: [this.product()?.title, [Validators.required]],
      description: [this.product()?.description, [Validators.required]],
      price: [this.product()?.price, [Validators.required]],
    });
  }

  onSubmit() {
    const product = this.form.value as Product;
    this.done.emit(product);
  }
}
