import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products: IProduct
  constructor(private productsService: ProductsService) { 
    this.productsService.listProducts().subscribe((response:IProduct) =>{
      this.products = response.slice(4,6)
      
    })
  }

  ngOnInit(): void {

  }

}
