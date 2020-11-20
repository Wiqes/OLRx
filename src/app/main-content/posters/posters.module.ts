import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostersComponent } from './posters.component';
import { MaterialModule } from 'src/app/material-module';
import { PosterModule } from './poster/poster.module';

@NgModule({
    declarations: [PostersComponent],
    imports: [CommonModule, MaterialModule, PosterModule],
    exports: [PostersComponent],
})
export class PostersModule {}
