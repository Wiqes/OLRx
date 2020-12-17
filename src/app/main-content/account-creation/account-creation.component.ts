import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-account-creation',
    templateUrl: './account-creation.component.html',
    styleUrls: ['./account-creation.component.scss'],
})
export class AccountCreationComponent implements OnInit {
    constructor() {}

    public buttonText = 'Create Account';

    ngOnInit(): void {}

    onSubmitted({ username, password }: { [key: string]: string }): void {
        console.log(`${username} ${password}`);
    }
}
