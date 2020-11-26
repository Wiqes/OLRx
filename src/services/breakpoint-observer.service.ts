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
    layout$?: Observable<{ [key: string]: boolean }>;
    layoutBreakpoints: { [key: string]: string } = {
        tabletLandscape: Breakpoints.TabletLandscape,
        webPortrait: Breakpoints.WebPortrait,
        webLandscape: Breakpoints.WebLandscape,
    };

    constructor(
        private snackBar: MatSnackBar,
        private store$: Store<SnackbarState>,
        breakpointObserver: BreakpointObserver,
    ) {
        const breakpoints: Array<string> = Object.values(this.layoutBreakpoints);

        this.layout$ = breakpointObserver.observe(breakpoints).pipe(
            filter((result) => result.matches),
            map((result) => result.breakpoints),
            mergeMap((resultBreakpoints) =>
                Object.keys(resultBreakpoints).filter((breakpoint) => {
                    for (const value of breakpoints) {
                        if (breakpoint === value && resultBreakpoints[value]) {
                            return true;
                        }
                    }
                    return false;
                }),
            ),
            map((breakpoint) => {
                const responsiveObject: { [key: string]: boolean } = {};

                for (const key of Object.keys(this.layoutBreakpoints)) {
                    responsiveObject[key] = breakpoint === this.layoutBreakpoints[key];
                }

                return responsiveObject;
            }),
        );
    }
}
