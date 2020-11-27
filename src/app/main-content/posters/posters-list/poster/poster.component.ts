import { Component, Input, OnInit } from '@angular/core';
import { Poster } from 'src/interfaces/poster.interface';
import { RoutingService } from 'src/services/routing.service';
import { RoutesPaths } from 'src/constants/routes-pathes';

@Component({
    selector: 'app-poster',
    templateUrl: './poster.component.html',
    styleUrls: ['./poster.component.scss'],
    providers: [RoutingService],
})
export class PosterComponent implements OnInit {
    constructor(private routingService: RoutingService) {}

    @Input() poster?: Poster;
    @Input() details?: boolean;

    ngOnInit(): void {}

    onBuyClick(id?: number): void {
        this.routingService.navigate(RoutesPaths.PosterDetails, id);
    }
}
