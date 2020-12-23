import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { Subscription } from 'rxjs';
import { CreateUserService } from 'src/services/create-user.service';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit, OnDestroy {
    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private authService: AuthenticationService,
        private createUserService: CreateUserService,
    ) {
        this.authService.getAuthError().subscribe((authError) => (this.authErrorMessage = authError));
        this.createUserService.createUserError$.subscribe(
            (createUserError) => (this.createUserError = createUserError),
        );
    }

    @Output() submitted = new EventEmitter<{ [key: string]: string }>();

    private usernameValueSub?: Subscription;
    private passwordValueSub?: Subscription;
    public buttonText = '';
    public authErrorMessage = false;
    public createUserError = '';
    public authForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
        password: [
            '',
            [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(20),
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].+'),
            ],
        ],
    });

    get username(): any {
        return this.authForm.get('username');
    }

    get password(): any {
        return this.authForm.get('password');
    }

    ngOnInit(): void {
        // this.usernameValueSub = this.username.valueChanges.pipe(debounceTime(1500)).subscribe(() => {
        this.usernameValueSub = this.username.valueChanges.subscribe(() => {
            if (this.authErrorMessage) {
                this.authService.removeAuthError();
            }
            if (this.createUserError) {
                this.createUserService.cleanCreateUserError();
            }
        });
        this.passwordValueSub = this.password.valueChanges.subscribe(() => {
            if (this.authErrorMessage) {
                this.authService.removeAuthError();
            }
            if (this.createUserError) {
                this.createUserService.cleanCreateUserError();
            }
        });
        this.authService.removeAuthError();

        this.route.url.subscribe((urlSegment) => {
            switch (urlSegment[0].path) {
                case 'login':
                    this.buttonText = 'Sign in';
                    break;
                case 'account-creation':
                    this.buttonText = 'Create Account';
                    break;
                default:
                    this.buttonText = '';
                    break;
            }
        });
    }

    onSubmit(): void {
        this.submitted.emit(this.authForm.value);
    }

    onCloseClick(): void {
        this.authService.removeAuthError();
    }

    onCreateUserErrorCloseClick(): void {
        this.createUserService.cleanCreateUserError();
    }

    ngOnDestroy(): void {
        this.usernameValueSub?.unsubscribe();
        this.passwordValueSub?.unsubscribe();
    }
}
