import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PageComponent } from 'src/app/pages/page/page.component';
import { GetOneProductComponent } from './pages/get-one-product/get-one-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';







const appRoutes: Routes = [
    {
        path: '',
        component: PageComponent,

        children: [
            { path: 'home', component: HomeComponent},
            { path: 'product/:product_id/:variant_id', component: ProductDetailComponent},
            { path: 'product/:id', component: GetOneProductComponent},
            
            { path: 'product-list', component: ProductListComponent},




            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'register', component: RegisterComponent },

   { path: '**', component: HomeComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, {initialNavigation: 'enabled', 
useHash: true,
anchorScrolling: 'enabled',
scrollPositionRestoration: 'enabled',
relativeLinkResolution: 'legacy' } );