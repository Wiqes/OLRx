import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostersComponent } from './main-content/posters/posters.component';
import { ProfileComponent } from './main-content/profile/profile.component';

const routes: Routes = [
    { path: 'posters', component: PostersComponent },
    { path: 'profile', component: ProfileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
