import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    {path:'',component:HeroPageComponent},
    {path:'hero',component:HeroPageComponent},
    {path:'shop',component:ShopComponent}

];
