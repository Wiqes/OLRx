import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { Observable } from 'rxjs';
import { AbleToBeUndefined } from '../interfaces/able-to-be-undefined.interface';
import { select, Store } from '@ngrx/store';
import { selectSnackbar } from '../store/selectors/snackbar.selectors';
import { PostersState } from '../store/reducers/posters.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation],
})
export class AppComponent {
    constructor(private store$: Store<PostersState>) {}

    public snackbar: Observable<AbleToBeUndefined<string>> = this.store$.pipe(select(selectSnackbar));
    public title = 'olrxApp';

    getAnimationData(outlet: RouterOutlet): any {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
