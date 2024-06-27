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
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  add(payload: ProductPayload) {
    return this.http.post<ProductPayload>(
      'http://localhost:3000/products',
      payload
    );
  }
}
