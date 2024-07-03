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
    return this.http.get<Product[]>(
      'https://product-store-api-sigma.vercel.app/products/'
    );
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(
      `https://product-store-api-sigma.vercel.app/products/${id}`
    );
  }

  add(payload: ProductPayload) {
    return this.http.post<ProductPayload>(
      'https://product-store-api-sigma.vercel.app/products',
      payload
    );
  }

  update(id: string, payload: ProductPayload) {
    return this.http.put<ProductPayload>(
      `https://product-store-api-sigma.vercel.app/products/${id}`,
      payload
    );
  }

  delete(id: string) {
    return this.http.delete<ProductPayload>(
      `https://product-store-api-sigma.vercel.app/products/${id}`
    );
  }

  getByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `https://product-store-api-sigma.vercel.app/products?category=${category}`
    );
  }
}
