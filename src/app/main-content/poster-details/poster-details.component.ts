import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { Poster } from 'src/interfaces/poster.interface';
import { selectCurrentPoster, selectCurrentPosterFlag } from 'src/store/selectors/posters.selectors';
import { ActivatedRoute } from '@angular/router';
import { PosterService } from 'src/services/api/poster.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
    selector: 'app-poster-details',
    templateUrl: './poster-details.component.html',
    styleUrls: ['./poster-details.component.scss'],
    providers: [PosterService],
})
export class PosterDetailsComponent implements OnInit {
    public poster?: Poster;
    public isInShoppingCart = false;

    constructor(
        private store$: Store<PostersState>,
        private route: ActivatedRoute,
        private posterService: PosterService,
        private authService: AuthenticationService,
    ) {
        this.authService.checkAuthToken();
    }

    ngOnInit(): void {
        this.route.params.subscribe(({ id }) => {
            this.posterService.getPosterById(id).subscribe(() => {
                this.store$.pipe(select(selectCurrentPoster)).subscribe((poster: any) => (this.poster = poster));
                this.store$
                    .pipe(select(selectCurrentPosterFlag))
                    .subscribe((isInShoppingCart) => (this.isInShoppingCart = isInShoppingCart));
            });
        });
    }

    onFabClicked(): void {
        if (this.poster?.isInShoppingCart) {
            this.posterService.removeShoppingCartFlag(this.poster?.id);
        } else {
            this.posterService.addShoppingCartFlag(this.poster?.id);
        }
    }
}
