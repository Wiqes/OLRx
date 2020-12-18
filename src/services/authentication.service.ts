import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { SetAuthErrorAction, SetAuthStateAction } from '../store/actions/main.actions';
import { select, Store } from '@ngrx/store';
import { MainState } from '../store/reducers/main.reducer';
import { selectAuthError, selectAuthState, selectUsername } from '../store/selectors/main.selectors';
import { RoutesPaths } from '../constants/routes-pathes';
import { RoutingService } from './routing.service';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private router: Router,
        private store$: Store<MainState>,
        private routingService: RoutingService,
    ) {}
    private serverUrl = 'http://localhost:3000';
    private loginUrl = `${this.serverUrl}/auth/login`;
    private createUserUrl = `${this.serverUrl}/users`;
    private subscription?: Subscription;

    createUser(username: string, password: string): void {
        this.http
            .post<{ username: string; password: string }>(this.createUserUrl, { username, password })
            .subscribe((response) => this.login(response.username, response.password));
    }

    login(username: string, password: string): void {
        this.http.post(this.loginUrl, { username, password }).subscribe(
            ({ access_token }: { access_token?: string }) => {
                if (access_token) {
                    localStorage.setItem('authToken', access_token);
                }
                localStorage.setItem('username', username);
                this.removeAuthError();
                this.setAuthTokenState();
                this.routingService.navigate(RoutesPaths.Posters);
            },
            (err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.addAuthError();
                        localStorage.removeItem('authToken');
                        this.setAuthTokenState();
                    }
                }
            },
        );
    }

    logout(): void {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        this.setAuthTokenState();
        this.routingService.navigate(RoutesPaths.Login);
    }

    setAuthTokenState(): void {
        const authenticated = Boolean(localStorage.getItem('authToken'));
        const username = String(localStorage.getItem('username'));
        this.store$.dispatch(new SetAuthStateAction({ authenticated, username }));
    }

    getAuthError(): Observable<boolean> {
        return this.store$.pipe(select(selectAuthError));
    }

    addAuthError(): void {
        this.store$.dispatch(new SetAuthErrorAction({ authenticationError: true }));
    }

    removeAuthError(): void {
        this.store$.dispatch(new SetAuthErrorAction({ authenticationError: false }));
    }

    getAuthTokenState(): Observable<boolean> {
        return this.store$.pipe(select(selectAuthState));
    }

    getUsername(): Observable<string> {
        return this.store$.pipe(select(selectUsername));
    }

    checkAuthToken(): void {
        this.getAuthTokenState().subscribe((authenticated) => {
            if (!authenticated) {
                this.routingService.navigate(RoutesPaths.Login);
            }
        });
    }

    watchAuthToken(): void {
        this.subscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (!this.router.navigated) {
                    this.setAuthTokenState();
                }
            }
        });
    }
}
