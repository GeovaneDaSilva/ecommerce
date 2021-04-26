import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/model/product'
import { Variant } from 'src/app/model/variant'

import { ActivatedRoute, Router } from '@angular/router';
import { IVariant } from 'src/app/interface/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product = new Product()
  
  variants: any = []
  variant = new Variant()
  image: string
  id: string
  variant_id: string
  variant_id_selected: any
  variantsList: any[] = [];
  selectVariant: any
  select: any
  // PRODUCTS

  products: {}
  constructor(private productsService: ProductsService, private route:ActivatedRoute) {

    this.getProducts()
    this.getProductsRelations()
   }

  
  ngOnInit(): void {
  }


  getProducts() {
    this.id = this.route.snapshot.paramMap.get('product_id');
    this.variant_id = this.route.snapshot.paramMap.get('variant_id');

    console.log('id product', this.id)
    console.log('id variant', this.variant_id)
    this.productsService.listProducts().subscribe((response: any) => {
      console.log(this.products);
      
      this.product = response.find(fruit => fruit.id == this.id);

      this.variant = this.product.variants.find(fruit => fruit.id == this.variant_id);


      this.variants = this.product.variants

      this.variantsList = this.variants
      this.selectVariant = this.variantsList[0];
      this.variant_id_selected = this.selectVariant.title
      this.select = this.selectVariant
      
      
      
      });
  
  }

  getTitle(event) {
    
    this.variant_id_selected = event.title
    this.select = event
  }

  getProductsRelations() {
    this.productsService.listProducts().subscribe((response: any) => {
      this.products = response.slice(0, 6)
      

    
    })
  }
}
