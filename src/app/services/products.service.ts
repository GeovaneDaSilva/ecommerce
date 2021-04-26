import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://api.redcon1.com/applicant/2021/products.php'
  constructor(private http: HttpClient) {
  }
  

  listProducts() {
    return this.http.get(this.url)
  }

}
