import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWithDelayComponent } from './button-with-delay.component';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
    declarations: [ButtonWithDelayComponent],
    imports: [CommonModule, MaterialModule],
    exports: [ButtonWithDelayComponent],
})
export class ButtonWithDelayModule {}
