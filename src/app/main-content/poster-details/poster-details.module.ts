import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterDetailsComponent } from './poster-details.component';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
    declarations: [PosterDetailsComponent],
    imports: [CommonModule, MaterialModule],
    exports: [PosterDetailsComponent],
})
export class PosterViewDetailsModule {}
