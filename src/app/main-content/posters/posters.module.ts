import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostersComponent } from './posters.component';

@NgModule({
    declarations: [PostersComponent],
    imports: [CommonModule],
    exports: [PostersComponent],
})
export class PostersModule {}
