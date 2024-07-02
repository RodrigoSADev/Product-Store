import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Observable } from 'rxjs';
import { ProductPayload } from '../../interfaces/payload.product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products/');
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`/api/products/${id}`);
  }

  add(payload: ProductPayload) {
    return this.http.post<ProductPayload>('/api/products', payload);
  }

  update(id: string, payload: ProductPayload) {
    return this.http.put<ProductPayload>(`/api/products/${id}`, payload);
  }

  delete(id: string) {
    return this.http.delete<ProductPayload>(`/api/products/${id}`);
  }
}
