import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { SnackbarState } from '../store/reducers/snackbar.reducer';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class BreakpointObserverService {
    layout$?: Observable<any>;
    tabletLandscape = Breakpoints.TabletLandscape;
    webPortrait = Breakpoints.WebPortrait;
    webLandscape = Breakpoints.WebLandscape;

    constructor(
        private snackBar: MatSnackBar,
        private store$: Store<SnackbarState>,
        breakpointObserver: BreakpointObserver,
    ) {
        const { webPortrait, tabletLandscape, webLandscape } = this;

        this.layout$ = breakpointObserver.observe([webPortrait, tabletLandscape, webLandscape]).pipe(
            filter((result) => result.matches),
            map((result) => result.breakpoints),
        );
    }
}
