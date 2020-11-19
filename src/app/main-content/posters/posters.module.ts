import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostersComponent } from './posters.component';
import { MaterialModule } from '../../material-module';

@NgModule({
    declarations: [PostersComponent],
    imports: [CommonModule, MaterialModule],
    exports: [PostersComponent],
})
export class PostersModule {}
