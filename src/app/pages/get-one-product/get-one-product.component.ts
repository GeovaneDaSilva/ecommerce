import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { Product } from 'src/app/model/product';
import { Variant } from 'src/app/model/variant';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-get-one-product',
  templateUrl: './get-one-product.component.html',
  styleUrls: ['./get-one-product.component.css']
})
 
export class GetOneProductComponent implements OnInit {

  products: IProduct
  product = new Product()
  images: any
  variants = new Variant()
  selectVariant: any
  variantsList: any;
  select: any
  variant_id_selected:any

  id: string
  constructor( private productService: ProductsService, private route:ActivatedRoute, private _router:Router) { 
    this.productService.listProducts().subscribe((response: any) => {
      this.products = response
      this.id = this.route.snapshot.paramMap.get('id');
      this.product = response.find(product => product.id == this.id)
      console.log(this.id);
      
      this.images = this.product
      
      // Get Variants

      this.variants = this.product.variants
      this.variantsList = this.variants

      this.selectVariant = this.variantsList[0]
      this.select = this.selectVariant
      this.variant_id_selected = this.selectVariant.title

      console.log('soy las variantes de ese product', this.select);
      

    })

  }
  
  getTitle(event) {
    this.variant_id_selected = event.title
    this.select = event

    console.log(event.title);
    
  }
  ngOnInit(): void {
  }

  incre: number 
  decre: number
  quantity: number = 1
  max: number
  stop: boolean
  i = 1
  x = 1
  z = 4
  increMent() {
    
    if (this.i !=3) {
      this.i++;
      this.quantity = this.i
      
    }
    
    if (this.quantity === this.z++) {
      this.stop = false
      console.log(this.stop);
      
    }
    this.max = this.x++
    console.log(this.max);
    this.max++
    this.x++
    
  }

  deCriment() {
    if (this.i !=1) {
      this.i--;
      this.quantity = this.i
      
    }
  }

  async navegation(product_id) {
    this._router.navigate(['/product/', product_id])
    setTimeout(function(){ location.reload() }, 1);
    
  }
  loadinImage: boolean = false
  imageChange: string
  selectImage(event) {
    console.log('selected', event.path[0].currentSrc);
    this.imageChange = event.path[0].currentSrc
    this.loadinImage = true
  }


}
