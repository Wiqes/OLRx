import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation],
})
export class AppComponent {
    constructor(private authService: AuthenticationService) {
        this.authService.watchAuthToken();
    }
    public title = 'olrxApp';

    getAnimationData(outlet: RouterOutlet): any {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
