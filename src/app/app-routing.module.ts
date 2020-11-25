import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostersComponent } from './main-content/posters/posters.component';
import { ProfileComponent } from './main-content/profile/profile.component';
import { DeliveryComponent } from './main-content/delivery/delivery.component';
import { PosterFormComponent } from './main-content/poster-form/poster-form.component';
import { PosterDetailsComponent } from './main-content/poster-details/poster-details.component';
import { ShoppingCartComponent } from './main-content/shopping-cart/shopping-cart.component';

const routes: Routes = [
    { path: '', redirectTo: '/posters', pathMatch: 'full' },
    { path: 'posters', component: PostersComponent, data: { animation: 'posters' } },
    { path: 'profile', component: ProfileComponent, data: { animation: 'profile' } },
    { path: 'delivery', component: DeliveryComponent, data: { animation: 'delivery' } },
    { path: 'poster/adding', component: PosterFormComponent, data: { animation: 'posterAdding' } },
    { path: 'poster/details/:id', component: PosterDetailsComponent, data: { animation: 'posterDetails' } },
    { path: 'shopping-cart', component: ShoppingCartComponent, data: { animation: 'shoppingCart' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
