import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { SnackbarState } from '../store/reducers/snackbar.reducer';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class BreakpointObserverService {
    breakpoints?: Observable<string>;
    tabletLandscape = Breakpoints.TabletLandscape;
    webPortrait = Breakpoints.WebPortrait;
    webLandscape = Breakpoints.WebLandscape;

    constructor(
        private snackBar: MatSnackBar,
        private store$: Store<SnackbarState>,
        breakpointObserver: BreakpointObserver,
    ) {
        const { webPortrait, tabletLandscape, webLandscape } = this;

        this.breakpoints = breakpointObserver.observe([webPortrait, tabletLandscape, webLandscape]).pipe(
            filter((result) => result.matches),
            map((result) => result.breakpoints),
            mergeMap((breakpoints) =>
                Object.keys(breakpoints).filter((breakpoint) => {
                    if (breakpoint === tabletLandscape && breakpoints[tabletLandscape]) {
                        return true;
                    }
                    if (breakpoint === webPortrait && breakpoints[webPortrait]) {
                        return true;
                    }
                    if (breakpoint === webLandscape && breakpoints[webLandscape]) {
                        return true;
                    }
                    return false;
                }),
            ),
        );
    }
}
