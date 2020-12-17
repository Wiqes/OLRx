import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AuthFormComponent],
    imports: [CommonModule, BrowserModule, CommonModule, MaterialModule, ReactiveFormsModule],
    exports: [AuthFormComponent],
})
export class AuthFormModule {}
