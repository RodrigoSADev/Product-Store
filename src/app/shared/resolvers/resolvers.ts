import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from '../services/products.service';

export const getAllProductsResolver = () => {
  const productsService = inject(ProductsService);
  return productsService.getAll();
};

export const getProductByIdResolver = (route: ActivatedRouteSnapshot) => {
  const productsService = inject(ProductsService);
  return productsService.getById(route.paramMap.get('id') as string);
};
