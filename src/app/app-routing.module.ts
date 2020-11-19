import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostersComponent } from './main-content/posters/posters.component';
import { ProfileComponent } from './main-content/profile/profile.component';

const routes: Routes = [
    { path: 'posters', component: PostersComponent, data: { animation: 'posters' } },
    { path: 'profile', component: ProfileComponent, data: { animation: 'profile' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
