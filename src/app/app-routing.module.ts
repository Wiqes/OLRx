import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostersComponent } from './main-content/posters/posters.component';
import { ProfileComponent } from './main-content/profile/profile.component';
import { DeliveryComponent } from './main-content/delivery/delivery.component';
import { PosterFormComponent } from './main-content/poster-form/poster-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/posters', pathMatch: 'full' },
    { path: 'posters', component: PostersComponent, data: { animation: 'posters' } },
    { path: 'profile', component: ProfileComponent, data: { animation: 'profile' } },
    { path: 'delivery', component: DeliveryComponent, data: { animation: 'delivery' } },
    { path: 'poster/adding', component: PosterFormComponent, data: { animation: 'posterAdding' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
