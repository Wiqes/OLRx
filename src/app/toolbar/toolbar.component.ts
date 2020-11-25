import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { RoutesPaths } from 'src/constants/routes-pathes';
import { RoutingService } from 'src/services/routing.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
    providers: [RoutingService],
})
export class ToolbarComponent implements OnInit {
    constructor(private routingService: RoutingService, private translateService: TranslateService) {}

    @Input() menuContainer: any;

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
