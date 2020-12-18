import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
    selector: 'app-account-creation',
    templateUrl: './account-creation.component.html',
    styleUrls: ['./account-creation.component.scss'],
})
export class AccountCreationComponent implements OnInit {
    constructor(private authService: AuthenticationService) {}

    ngOnInit(): void {}

    onSubmitted({ username, password }: { [key: string]: string }): void {
        this.authService.createUser(username, password);
    }
}
