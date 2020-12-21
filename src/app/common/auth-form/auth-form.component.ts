import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit, OnDestroy {
    constructor(private fb: FormBuilder, private route: ActivatedRoute, private authService: AuthenticationService) {
        this.authService.getAuthError().subscribe((authError) => (this.errorMessage = authError));
    }

    @Output() submitted = new EventEmitter<{ [key: string]: string }>();

    private usernameValueSub?: Subscription;
    private passwordValueSub?: Subscription;
    public buttonText = '';
    public errorMessage = false;
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

    ngOnInit(): void {
        this.usernameValueSub = this.username.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
            if (this.errorMessage) {
                this.authService.removeAuthError();
            }
        });
        this.passwordValueSub = this.password.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
            if (this.errorMessage) {
                this.authService.removeAuthError();
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
        this.submitted.emit(this.profileForm.value);
    }

    onCloseClick(): void {
        this.authService.removeAuthError();
    }

    ngOnDestroy(): void {
        this.usernameValueSub?.unsubscribe();
        this.passwordValueSub?.unsubscribe();
    }
}
