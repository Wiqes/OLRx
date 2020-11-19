import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'olrxApp';

    onToggleSidenav(drawer: any): void {
        drawer.toggle();
    }
}
