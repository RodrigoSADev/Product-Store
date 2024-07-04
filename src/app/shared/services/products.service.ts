import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Observable } from 'rxjs';
import { ProductPayload } from '../../interfaces/payload.product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly API = 'https://product-store-api-sigma.vercel.app';
  http = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API}/products`);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.API}/products/${id}`);
  }

  add(payload: ProductPayload) {
    return this.http.post<ProductPayload>(`${this.API}/products`, payload);
  }

  update(id: string, payload: ProductPayload) {
    return this.http.put<ProductPayload>(`${this.API}/products/${id}`, payload);
  }

  delete(id: string) {
    return this.http.delete<ProductPayload>(`${this.API}/products/${id}`);
  }

  getByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.API}/products?category=${category}`
    );
  }
}
