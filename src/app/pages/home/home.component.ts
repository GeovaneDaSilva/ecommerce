import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: IProduct

  productOne: IProduct
  productTwo: IProduct

  constructor(private productsService: ProductsService) { 
    this.productsService.listProducts().subscribe((response: IProduct) =>{

      this.products = response.slice(0, 16)
      this.productOne =  response[16]
      this.productTwo =  response[14]


      console.log(this.products);
      
    })
  }

  ngOnInit(): void {
  }

}
