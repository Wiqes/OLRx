import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RoutingService } from '../services/routing.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private routingService: RoutingService, private authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem('authToken');
        const JWToken = `Bearer ${authToken}`;

        const authReq = req.clone({ setHeaders: { Authorization: JWToken } });

        // send cloned request with header to the next handler.
        return next.handle(authReq).pipe(
            tap(
                () => {},
                (err) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            this.authService.logout();
                        }
                    }
                },
            ),
        );
    }
}
