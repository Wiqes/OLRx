import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MaterialModule } from 'src/app/material-module';
import { MatTableModule } from '@angular/material/table';
import { PosterModule } from '../posters/posters-list/poster/poster.module';

@NgModule({
    declarations: [ShoppingCartComponent],
    imports: [CommonModule, PosterModule, MaterialModule, MatTableModule],
    exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
