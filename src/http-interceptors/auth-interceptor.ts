import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RoutesPaths } from '../constants/routes-pathes';
import { RoutingService } from '../services/routing.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private routingService: RoutingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const authToken = this.auth.getAuthorizationToken();
        const authToken =
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTYwNzYwODY1OCwiZXhwIjoxNjA3NjA5MjU4fQ.My5XsDmszNMgcysHzm633GicxK-yThiR5S-hGyi1s5I';

        const authReq = req.clone({ setHeaders: { Authorization: authToken } });

        // send cloned request with header to the next handler.
        return next.handle(authReq).pipe(
            tap(
                () => {},
                (err) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            this.routingService.navigate(RoutesPaths.Login);
                        }
                    }
                },
            ),
        );
    }
}
