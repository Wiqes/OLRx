import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { PosterService } from 'src/services/api/poster.service';
import { selectPosters } from 'src/store/selectors/posters.selectors';
import { Posters } from 'src/interfaces/poster.interface';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
    selector: 'app-buy-posters',
    templateUrl: './buy-posters.component.html',
    styleUrls: ['./buy-posters.component.scss'],
})
export class BuyPostersComponent implements OnInit {
    constructor(
        private store$: Store<PostersState>,
        private posterService: PosterService,
        private authService: AuthenticationService,
    ) {
        this.authService.checkAuthToken();
        this.store$
            .pipe(select(selectPosters))
            .subscribe((posters) => (this.posters$ = posters.filter((poster) => !poster?.isInShoppingCart)));
    }

    public posters$: Posters = [];

    ngOnInit(): void {
        this.posterService.getPosters();
    }
}
