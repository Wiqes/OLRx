import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Poster } from 'src/interfaces/poster.interface';
import { RoutingService } from 'src/services/routing.service';
import { RoutesPaths } from 'src/constants/routes-pathes';
import { PosterService } from 'src/services/api/poster.service';
import { filesUrl, noPhotoUrl } from 'src/constants/urls';
import { AbleToBeUndefined } from 'src/interfaces/able-to-be-undefined.interface';
import { AuthenticationService } from 'src/services/authentication.service';
import { EnableSnackBarAction } from 'src/store/actions/snackbar.actions';
import { Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';

@Component({
    selector: 'app-poster',
    templateUrl: './poster.component.html',
    styleUrls: ['./poster.component.scss'],
    providers: [RoutingService, PosterService],
})
export class PosterComponent implements OnInit, OnChanges {
    constructor(
        private routingService: RoutingService,
        private posterService: PosterService,
        private authService: AuthenticationService,
        private store$: Store<PostersState>,
    ) {
        this.authService.getUsername().subscribe((username) => (this.username = username));
    }

    @Input() poster?: AbleToBeUndefined<Poster>;
    @Input() details?: boolean;
    @Input() list?: boolean;

    public imageUrl = noPhotoUrl;
    private username = '';

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        const currentPhoto = changes.poster?.currentValue?.photo;
        if (currentPhoto) {
            this.imageUrl = `${filesUrl}${currentPhoto}`;
        } else {
            this.imageUrl = noPhotoUrl;
        }
    }

    onBuyClick(id?: string): void {
        this.routingService.navigate(RoutesPaths.PosterDetails, id);
    }

    onAddToCartClick(id?: string): void {
        this.posterService.addShoppingCartFlag(id);
    }

    onRemovePosterClick(id?: string): void {
        if (this.poster?.creator === this.username) {
            this.posterService.removePoster(id);
        } else {
            this.store$.dispatch(
                new EnableSnackBarAction({ snackbarText: 'This action is forbidden for the current user' }),
            );
        }
    }
}
