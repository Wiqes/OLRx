import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterFormComponent } from './poster-form.component';
import { MaterialModule } from '../../material-module';

@NgModule({
    declarations: [PosterFormComponent],
    imports: [CommonModule, MaterialModule],
    exports: [PosterFormComponent],
})
export class PosterFormModule {}
