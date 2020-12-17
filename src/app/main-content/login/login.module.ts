import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthFormModule } from 'src/app/common/auth-form/auth-form.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [AuthFormModule],
})
export class LoginModule {}
