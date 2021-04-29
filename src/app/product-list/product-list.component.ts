import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: IProduct
  news: IProduct
  offers: IProduct
  constructor(private productService: ProductsService) {
    
    this.getProducts()
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.productService.listProducts().subscribe((response: IProduct) => {
      this.products = response

      
    })
  }
}