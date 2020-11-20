import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterComponent } from './poster.component';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
    declarations: [PosterComponent],
    imports: [CommonModule, MaterialModule],
    exports: [PosterComponent],
})
export class PosterModule {}
