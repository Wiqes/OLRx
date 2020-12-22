import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CreateUserService } from '../services/create-user.service';

@Injectable()
export class CreateUserInterceptor implements HttpInterceptor {
    constructor(private createUserService: CreateUserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
                () => {},
                (err) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 409) {
                            this.createUserService.setError('Username already exists');
                        }
                    }
                },
            ),
        );
    }
}
