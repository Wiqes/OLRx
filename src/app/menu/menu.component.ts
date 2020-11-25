import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { PosterService } from 'src/services/poster.service';
import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [PosterService],
})
export class MenuComponent implements OnInit {
    isPostersPage?: boolean;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private posterService: PosterService,
        private translateService: TranslateService,
    ) {}

    ngOnInit(): void {
        this.translateService.use(environment.defaultLocale);

        this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((x) => {
            this.isPostersPage = x.url === '/posters';
        });
    }

    onProfileClick(): void {
        this.router.navigate(['/profile']);
    }

    onDeliveryClick(): void {
        this.router.navigate(['/delivery']);
    }

    onAddPosterClick(): void {
        this.router.navigate(['/poster/adding']);
    }

    onCheckAddingClick(): void {
        this.posterService.addPoster({
            id: 222, // the id should be unique and generated on the server-side
            title: 'New Poster',
            isInShoppingCart: false,
            sellerName: 'Sellers Name',
            price: 220,
            description: 'Some some some some some some some',
        });
    }
}
