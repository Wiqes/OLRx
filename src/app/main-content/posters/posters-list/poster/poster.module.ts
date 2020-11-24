import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterComponent } from './poster.component';
import { MaterialModule } from 'src/app/material-module';
import { InternationalizationModule } from 'src/app/internationalization.module';

@NgModule({
    declarations: [PosterComponent],
    imports: [CommonModule, MaterialModule, InternationalizationModule],
    exports: [PosterComponent],
})
export class PosterModule {}
