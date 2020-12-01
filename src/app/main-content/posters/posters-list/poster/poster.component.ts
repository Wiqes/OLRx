import { Component, Input, OnInit } from '@angular/core';
import { Poster } from 'src/interfaces/poster.interface';
import { RoutingService } from 'src/services/routing.service';
import { RoutesPaths } from 'src/constants/routes-pathes';
import { PosterService } from 'src/services/poster.service';

@Component({
    selector: 'app-poster',
    templateUrl: './poster.component.html',
    styleUrls: ['./poster.component.scss'],
    providers: [RoutingService, PosterService],
})
export class PosterComponent implements OnInit {
    constructor(private routingService: RoutingService, private posterService: PosterService) {}

    @Input() poster?: Poster;
    @Input() details?: boolean;

    ngOnInit(): void {}

    onBuyClick(id?: number): void {
        this.routingService.navigate(RoutesPaths.PosterDetails, id);
    }

    onAddToCartClick(id?: number): void {
        this.posterService.addShoppingCartFlag(id);
    }
}
