import { Component } from '@angular/core';
import { RoutesPaths } from 'src/constants/routes-pathes';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/services/authentication.service';
import { RoutingService } from 'src/services/routing.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private authService: AuthenticationService, private routingService: RoutingService) {}

    public buttonText = 'Sign in';

    onSubmitted({ username, password }: { [key: string]: string }): void {
        this.authService.login(username, password).subscribe(
            ({ access_token }) => {
                localStorage.setItem('authToken', access_token);
                localStorage.setItem('username', username);
                this.authService.setAuthTokenState();
                this.routingService.navigate(RoutesPaths.Posters);
            },
            (err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        localStorage.removeItem('authToken');
                        this.authService.setAuthTokenState();
                    }
                }
            },
        );
    }
}
