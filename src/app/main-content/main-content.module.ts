import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostersModule } from './posters/posters.module';
import { ProfileModule } from './profile/profile.module';
import { DeliveryModule } from './delivery/delivery.module';
import { PosterFormModule } from './poster-form/poster-form.module';
import { PosterViewDetailsModule } from './poster-details/poster-details.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        PostersModule,
        ProfileModule,
        DeliveryModule,
        PosterFormModule,
        PosterViewDetailsModule,
        ShoppingCartModule,
    ],
})
export class MainContentModule {}
