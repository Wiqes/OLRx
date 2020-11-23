import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostersComponent } from './posters.component';
import { MaterialModule } from 'src/app/material-module';
import { PostersListModule } from './posters-list/posters-list.module';

@NgModule({
    declarations: [PostersComponent],
    imports: [CommonModule, MaterialModule, PostersListModule],
    exports: [PostersComponent],
})
export class PostersModule {}
