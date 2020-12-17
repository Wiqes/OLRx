import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCreationComponent } from './account-creation.component';
import { AuthFormModule } from 'src/app/common/auth-form/auth-form.module';

@NgModule({
    declarations: [AccountCreationComponent],
    imports: [CommonModule, AuthFormModule],
})
export class AccountCreationModule {}
