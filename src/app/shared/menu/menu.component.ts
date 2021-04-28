import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct, IVariant } from 'src/app/interface/product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  variants: IVariant
  variantOne: IVariant
  variantSix: IVariant
  variantFive: IVariant
  variantFour: IVariant

  products: IProduct
  productOne: IProduct
  productOne_id: IProduct
  productSix: IProduct
  productSix_id: IProduct
  productFive: IProduct
  productFive_id: IProduct
  productFour: IProduct
  productFour_id: IProduct
  constructor(private productService: ProductsService, private router: Router) {
    this.getVariants()
  }

  ngOnInit(): void {
  }


  getVariants() {
    this.productService.listProducts().subscribe((response: IProduct) => {
      this.products = response

      

      this.productOne = this.products[0].title
      this.productOne_id = this.products[0].id

      this.productFour = this.products[3].title
      this.productFour_id = this.products[3].id
      this.productFive = this.products[4].title
      this.productFive_id = this.products[4].id

      this.productSix = this.products[5].title
      this.productSix_id = this.products[5].id 

      let data = response.map(variant => variant.variants)

      let dataVariants = data.map(variant => variant)
      this.variants = dataVariants

      

      this.variantOne = this.variants[0]
      this.variantFour  = this.variants[3]
      this.variantFive = this.variants[4]
      this.variantSix = this.variants[5]
    })
  }


  async reload(idProduct, id) {

    console.log('aqui esta el id',idProduct, id);
    
    let path = this.router.navigate([`/product/${idProduct}/${id}`])

    location.reload(await path)
    

  }
}
