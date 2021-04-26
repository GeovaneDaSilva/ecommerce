import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PageComponent } from 'src/app/pages/page/page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';







const appRoutes: Routes = [
    {
        path: '',
        component: PageComponent,

        children: [
            { path: 'home', component: HomeComponent},
            { path: 'product/:product_id/:variant_id', component: ProductDetailComponent},
            




            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'register', component: RegisterComponent },

   // { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, {initialNavigation: 'enabled',
useHash: true,
anchorScrolling: 'enabled',
scrollPositionRestoration: 'enabled',
relativeLinkResolution: 'legacy' } );