import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatOption,
} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  categories: string[] = [];
  @Output() filter = new EventEmitter<string>();
  @ViewChild(MatSelect) matSelect!: MatSelect;

  categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  onCategorySelected(event: any) {
    this.filter.emit(event.value);
  }

  resetFilter() {
    this.matSelect.value = '';
    this.filter.emit('');
  }
}
