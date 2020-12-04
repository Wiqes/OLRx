import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterFormComponent } from './poster-form.component';
import { MaterialModule } from 'src/app/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [PosterFormComponent],
    imports: [BrowserModule, CommonModule, MaterialModule, ReactiveFormsModule],
    exports: [PosterFormComponent],
})
export class PosterFormModule {}
