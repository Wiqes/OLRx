import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbleToBeUndefined } from '../interfaces/able-to-be-undefined.interface';

@Injectable({
    providedIn: 'root',
})
export class UploadFileService {
    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    upload(file: AbleToBeUndefined<File>): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();

        if (file) {
            formData.append('file', file);
        }

        const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
            reportProgress: true,
            responseType: 'json',
        });

        return this.http.request(req);
    }

    getFiles(): Observable<any> {
        return this.http.get(`${this.baseUrl}/files`);
    }
}
