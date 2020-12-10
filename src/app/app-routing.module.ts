import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostersComponent } from './main-content/posters/posters.component';
import { ProfileComponent } from './main-content/profile/profile.component';
import { DeliveryComponent } from './main-content/delivery/delivery.component';
import { PosterFormComponent } from './main-content/poster-form/poster-form.component';
import { PosterDetailsComponent } from './main-content/poster-details/poster-details.component';
import { ShoppingCartComponent } from './main-content/shopping-cart/shopping-cart.component';
import { RoutesPaths } from '../constants/routes-pathes';
import { BuyPostersComponent } from './main-content/buy-posters/buy-posters.component';
import { LoginComponent } from './main-content/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: `/${RoutesPaths.Posters}`, pathMatch: 'full' },
    { path: RoutesPaths.Posters, component: PostersComponent, data: { animation: RoutesPaths.Posters } },
    { path: RoutesPaths.Login, component: LoginComponent, data: { animation: RoutesPaths.Login } },
    { path: RoutesPaths.BuyPosters, component: BuyPostersComponent, data: { animation: RoutesPaths.BuyPosters } },
    { path: RoutesPaths.Profile, component: ProfileComponent, data: { animation: RoutesPaths.Profile } },
    { path: RoutesPaths.Delivery, component: DeliveryComponent, data: { animation: RoutesPaths.Delivery } },
    { path: RoutesPaths.PosterAdding, component: PosterFormComponent, data: { animation: RoutesPaths.PosterAdding } },
    {
        path: `${RoutesPaths.PosterDetails}/:id`,
        component: PosterDetailsComponent,
        data: { animation: RoutesPaths.PosterDetails },
    },
    {
        path: RoutesPaths.ShoppingCart,
        component: ShoppingCartComponent,
        data: { animation: RoutesPaths.ShoppingCart },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
