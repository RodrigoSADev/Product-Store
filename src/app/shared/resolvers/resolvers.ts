import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from '../services/products.service';

export const getAllProductsResolver = () => {
  const productService = inject(ProductsService);
  return productService.getAll();
};

export const getProductByIdResolver = (route: ActivatedRouteSnapshot) => {
  const productService = inject(ProductsService);
  return productService.getById(route.paramMap.get('id') as string);
};
