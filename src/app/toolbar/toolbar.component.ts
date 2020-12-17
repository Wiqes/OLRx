import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { RoutesPaths } from 'src/constants/routes-pathes';
import { RoutingService } from 'src/services/routing.service';
import { DisableSnackBar } from 'src/store/actions/snackbar.actions';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { selectSnackbar } from 'src/store/selectors/snackbar.selectors';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    providers: [RoutingService],
})
export class ToolbarComponent implements OnInit {
    constructor(
        private routingService: RoutingService,
        private translateService: TranslateService,
        private snackBar: MatSnackBar,
        private authService: AuthenticationService,
        private store$: Store<PostersState>,
    ) {
        this.authService.getAuthTokenState().subscribe((authenticated) => (this.authenticated = authenticated));
        this.store$.pipe(select(selectSnackbar)).subscribe((snackbarText) => {
            if (snackbarText) {
                this.snackBar.open(snackbarText, 'Close', {
                    duration: 2000,
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                });
                setTimeout(() => this.store$.dispatch(new DisableSnackBar()));
            }
        });
    }

    @Input() menuContainer: any;

    public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    public verticalPosition: MatSnackBarVerticalPosition = 'top';
    public selectedLanguage?: string;
    public languages: { id: string; title: string }[] = [];
    public mouseOver = '';
    public authenticated = false;

    ngOnInit(): void {
        this.translateService.use(environment.defaultLocale);
        this.selectedLanguage = environment.defaultLocale;

        this.translateService
            .get(environment.locales.map((x) => `LANGUAGES.${x.toUpperCase()}`))
            .subscribe((translations) => {
                // init dropdown list with TRANSLATED list of languages from config
                this.languages = environment.locales.map((x) => {
                    return {
                        id: x,
                        title: translations[`LANGUAGES.${x.toUpperCase()}`],
                    };
                });
            });
    }

    changeLocale(): void {
        this.translateService.use(this.selectedLanguage as string);
    }

    onHomeClick(): void {
        this.routingService.navigate(RoutesPaths.Posters);
    }

    onLoginClick(): void {
        this.routingService.navigate(RoutesPaths.Login);
    }

    onSignUpClick(): void {
        this.routingService.navigate(RoutesPaths.AccountCreation);
    }

    onLogoutClick(): void {
        this.authService.logout();
    }

    onShoppingCartClick(): void {
        this.routingService.navigate(RoutesPaths.ShoppingCart);
    }
}
