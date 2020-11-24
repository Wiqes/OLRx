import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PosterService } from 'src/services/poster.service';
import { environment } from '../../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [PosterService],
})
export class MenuComponent implements OnInit {
    constructor(
        private router: Router,
        private posterService: PosterService,
        private translateService: TranslateService,
    ) {}

    ngOnInit(): void {
        this.translateService.use(environment.defaultLocale);
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
            sellerName: 'Sellers Name',
            price: 220,
            description: 'Some some some some some some some',
        });
    }
}
