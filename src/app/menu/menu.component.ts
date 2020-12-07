import { Component, OnInit } from '@angular/core';
import { PosterService } from 'src/services/poster.service';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { RoutingService } from 'src/services/routing.service';
import { RoutesPaths } from 'src/constants/routes-pathes';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [PosterService, RoutingService],
})
export class MenuComponent implements OnInit {
    isPostersPage?: boolean;

    constructor(
        private posterService: PosterService,
        private routingService: RoutingService,
        private translateService: TranslateService,
    ) {}

    ngOnInit(): void {
        this.translateService.use(environment.defaultLocale);

        this.routingService.path?.subscribe((path) => {
            this.isPostersPage = path === RoutesPaths.Posters;
        });
    }

    onProfileClick(): void {
        this.routingService.navigate(RoutesPaths.Profile);
    }

    onDeliveryClick(): void {
        this.routingService.navigate(RoutesPaths.Delivery);
    }

    onAddPosterClick(): void {
        this.routingService.navigate(RoutesPaths.PosterAdding);
    }

    onCheckAddingClick(): void {
        this.posterService.addPoster({
            id: '222', // the id should be unique and generated on the server-side
            title: 'New Poster',
            isInShoppingCart: false,
            sellerName: 'Sellers Name',
            price: 220,
            description: 'Some some some some some some some',
        });
    }
}
