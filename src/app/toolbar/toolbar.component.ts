import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { RoutesPaths } from 'src/constants/routes-pathes';
import { RoutingService } from 'src/services/routing.service';
import { DisableSnackBar } from 'src/store/actions/snackbar.actions';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    providers: [RoutingService],
})
export class ToolbarComponent implements OnInit, OnChanges {
    constructor(
        private routingService: RoutingService,
        private translateService: TranslateService,
        private snackBar: MatSnackBar,
        private store$: Store<PostersState>,
    ) {}

    @Input() menuContainer: any;
    @Input() snackbarText?: string | null;

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    selectedLanguage?: string;
    languages: { id: string; title: string }[] = [];

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

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.snackbarText?.currentValue) {
            this.snackBar.open(changes.snackbarText?.currentValue, 'Close', {
                duration: 2000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
            setTimeout(() => this.store$.dispatch(new DisableSnackBar()));
        }
    }

    changeLocale(): void {
        this.translateService.use(this.selectedLanguage as string);
    }

    onHomeClick(): void {
        this.routingService.navigate(RoutesPaths.Posters);
    }

    onShoppingCartClick(): void {
        this.routingService.navigate(RoutesPaths.ShoppingCart);
    }
}
