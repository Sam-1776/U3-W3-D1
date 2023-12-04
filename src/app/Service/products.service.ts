import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = environment.apiUrl;
  favorite2: Product[] = []

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<{products: Product[]}>(this.url).pipe(map(prod => prod.products))
  }
}
