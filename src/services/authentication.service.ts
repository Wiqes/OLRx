import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private http: HttpClient) {}
    private loginUrl = 'http://localhost:3000/auth/login';

    login(username: string, password: string): Observable<any> {
        return this.http.post(this.loginUrl, { username, password });
    }
}
