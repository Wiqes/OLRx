import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostersListComponent } from './posters-list.component';
import { MaterialModule } from 'src/app/material-module';
import { PosterModule } from './poster/poster.module';

@NgModule({
    declarations: [PostersListComponent],
    imports: [CommonModule, MaterialModule, PosterModule],
    exports: [PostersListComponent],
})
export class PostersListModule {}
