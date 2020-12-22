import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CreateUserService {
    constructor() {}

    public createUserError$ = new BehaviorSubject<string>('');

    getError(): string {
        return this.createUserError$.getValue();
    }

    setError(error: string): void {
        this.createUserError$.next(error);
    }

    cleanCreateUserError(): void {
        this.setError('');
    }
}
