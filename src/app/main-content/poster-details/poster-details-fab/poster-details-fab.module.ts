import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterDetailsFABComponent } from './poster-details-fab.component';
import { MaterialModule } from 'src/app/material-module';
import { InternationalizationModule } from 'src/app/internationalization.module';

@NgModule({
    declarations: [PosterDetailsFABComponent],
    imports: [CommonModule, MaterialModule, InternationalizationModule],
    exports: [PosterDetailsFABComponent],
})
export class PosterDetailsFAB {}
