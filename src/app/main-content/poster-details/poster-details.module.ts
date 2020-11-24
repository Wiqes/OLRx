import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterDetailsComponent } from './poster-details.component';
import { MaterialModule } from 'src/app/material-module';
import { PosterModule } from '../posters/posters-list/poster/poster.module';

@NgModule({
    declarations: [PosterDetailsComponent],
    imports: [CommonModule, MaterialModule, PosterModule],
    exports: [PosterDetailsComponent],
})
export class PosterViewDetailsModule {}
