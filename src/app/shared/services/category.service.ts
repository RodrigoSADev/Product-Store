import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: string[] = [
    'Eletrônicos',
    'Roupas',
    'Alimentos',
    'Móveis',
    'Ferramentas',
  ];

  getCategories(): string[] {
    return this.categories;
  }
}
