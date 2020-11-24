import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MaterialModule } from '../material-module';
import { InternationalizationModule } from '../internationalization.module';

@NgModule({
    declarations: [MenuComponent],
    imports: [CommonModule, MaterialModule, InternationalizationModule],
    exports: [MenuComponent],
})
export class MenuModule {}
