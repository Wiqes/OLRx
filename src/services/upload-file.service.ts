import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbleToBeUndefined } from '../interfaces/able-to-be-undefined.interface';
import { filesUrl } from '../constants/urls';

@Injectable({
    providedIn: 'root',
})
export class UploadFileService {
    constructor(private http: HttpClient) {}

    upload(file: AbleToBeUndefined<File>): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();

        if (file) {
            formData.append('image', file);
        }

        const req = new HttpRequest('POST', filesUrl, formData, {
            reportProgress: true,
            responseType: 'json',
        });

        return this.http.request(req);
    }

    getFiles(): Observable<any> {
        return this.http.get(filesUrl);
    }
}
