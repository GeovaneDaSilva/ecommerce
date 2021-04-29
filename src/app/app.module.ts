import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageComponent } from './pages/page/page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { SearchComponent } from './shared/search/search.component';
import { ShopComponent } from './shared/shop/shop.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { GetOneProductComponent } from './pages/get-one-product/get-one-product.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PageComponent,
    SidebarComponent,
    MenuComponent,
    TopHeaderComponent,
    SearchComponent,
    ShopComponent,
    ProductsComponent,
    ProductDetailComponent,
    GetOneProductComponent,
    FooterComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule,
    NgOptionHighlightModule,
    NgSelectModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
