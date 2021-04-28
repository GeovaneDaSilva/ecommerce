import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: IProduct
  constructor(private productService: ProductsService) {
    
    this.getProducts()
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.productService.listProducts().subscribe((response: IProduct) => {
      this.products = response.slice(0, 3)
      
    })
  }
}
