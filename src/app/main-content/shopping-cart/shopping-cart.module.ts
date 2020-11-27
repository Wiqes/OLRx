import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MaterialModule } from 'src/app/material-module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [ShoppingCartComponent],
    imports: [CommonModule, MaterialModule, MatTableModule],
    exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
