import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  products: IProduct
  product = new Product()


  productOne: IProduct
  productSix: IProduct
  productFive: IProduct
  productFour: IProduct
  productServen: IProduct
  
  imagesProducts: IProduct
  imagesProductsFour: IProduct
  imagesProductsFive: IProduct
  imagesProductsSix: IProduct
  imagesProductsServen: IProduct


  constructor(private productService: ProductsService) {
    
    this.productService.listProducts().subscribe((response: any) => {
      this.products = response

      this.productOne = this.products[0]
      this.productFour = this.products[3]
      this.productFive = this.products[4]

      this.productSix = this.products[5]
      this.productServen = this.products[7]

      let productOne = response.find(product => product.id == this.products[0].id);

      let productFour = response.find(product => product.id == this.products[3].id);

      let productFive = response.find(product => product.id == this.products[4].id);

      let productSix = response.find(product => product.id == this.products[5].id);

      let productServen = response.find(product => product.id == this.products[7].id);

      

      this.imagesProducts = productOne


      this.imagesProductsFour = productFour


      this.imagesProductsFive = productFive


      this.imagesProductsSix = productSix

      this.imagesProductsServen = productServen


      console.log('soy server', this.imagesProductsServen);


      
    })




    
      
  }
 

  ngOnInit(): void {
  }

}
