import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private authService: AuthenticationService) {}

    public buttonText = 'Sign in';

    onSubmitted({ username, password }: { [key: string]: string }): void {
        this.authService.login(username, password);
    }
}
