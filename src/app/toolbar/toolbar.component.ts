import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

interface Languages {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router, private translateService: TranslateService) {}

    @Input() menuContainer: any;

    selectedLanguage: string | undefined;
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
        this.router.navigate(['/posters']);
    }
}
