import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RoutingService } from '../../../services/routing.service';
import { RoutesPaths } from '../../../constants/routes-pathes';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        private fb: FormBuilder,
        private authService: AuthenticationService,
        private routingService: RoutingService,
    ) {}

    public profileForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    });

    get username(): any {
        return this.profileForm.get('username');
    }

    get password(): any {
        return this.profileForm.get('password');
    }

    ngOnInit(): void {}

    onSubmit(): void {
        const { username, password } = this.profileForm.value;
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
