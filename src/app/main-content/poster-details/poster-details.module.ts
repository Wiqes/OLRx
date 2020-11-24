import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterDetailsComponent } from './poster-details.component';
import { MaterialModule } from 'src/app/material-module';
import { PosterModule } from '../posters/posters-list/poster/poster.module';
import { InternationalizationModule } from 'src/app/internationalization.module';
import { PosterDetailsFAB } from './poster-details-fab/poster-details-fab.module';

@NgModule({
    declarations: [PosterDetailsComponent],
    imports: [CommonModule, MaterialModule, PosterModule, InternationalizationModule, PosterDetailsFAB],
    exports: [PosterDetailsComponent],
})
export class PosterViewDetailsModule {}
