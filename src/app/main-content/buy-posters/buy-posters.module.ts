import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyPostersComponent } from './buy-posters.component';
import { MaterialModule } from 'src/app/material-module';
import { PostersListModule } from 'src/app/common/posters-list/posters-list.module';

@NgModule({
    declarations: [BuyPostersComponent],
    imports: [CommonModule, MaterialModule, PostersListModule],
    exports: [BuyPostersComponent],
})
export class BuyPostersModule {}
