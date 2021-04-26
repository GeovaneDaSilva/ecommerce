import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-get-one-product',
  templateUrl: './get-one-product.component.html',
  styleUrls: ['./get-one-product.component.css']
})
export class GetOneProductComponent implements OnInit {

  products: IProduct
  constructor( private productService: ProductsService) { 
    this.productService.listProducts().subscribe(response => {
      console.log(response)
    })

  }

  ngOnInit(): void {
  }

}
