import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products: any = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:3000/products')
      .subscribe((products) => {
        this.products = products;
      });
  }
}
