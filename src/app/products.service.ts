import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Product {
  id: string;
  name: string;
  shopName: string;
  image: string;
  price: number;
  priceOld: number;
  itemsLeft: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/products');
  }
}
