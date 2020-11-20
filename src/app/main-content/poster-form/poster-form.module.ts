import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterFormComponent } from './poster-form.component';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [PosterFormComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule],
    exports: [PosterFormComponent],
})
export class PosterFormModule {}
