import {
  Component,
  EventEmitter,
  Output,
  computed,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  product = input.required<Product>();

  productTitle = computed(() => this.product().title);
  productDescription = computed(() => this.product().description);
  productPrice = computed(() => this.product().price);

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
