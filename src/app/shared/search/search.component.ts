import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductsService } from '../../services/products.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: IProduct

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
