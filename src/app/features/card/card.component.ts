import {
  Component,
  EventEmitter,
  Output,
  computed,
  inject,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../interfaces/product';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

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

  modal = inject(MatDialog);
  @Output() edit = new EventEmitter();

  onEdit() {
    this.edit.emit();
    this.modal.open(EditComponent);
  }
}
