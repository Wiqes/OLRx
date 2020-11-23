import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
    title = 'olrxApp';

    selectedLanguage: string | undefined;
    languages: { id: string; title: string }[] = [];

    constructor(private translateService: TranslateService) {}

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

    getAnimationData(outlet: RouterOutlet): any {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
