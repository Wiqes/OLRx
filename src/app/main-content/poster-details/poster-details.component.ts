import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { Observable } from 'rxjs';
import { Poster, Posters } from 'src/interfaces/poster.interface';
import { selectPosters } from 'src/store/selectors/posters.selectors';
import { ActivatedRoute } from '@angular/router';
import { PosterService } from 'src/services/poster.service';

@Component({
    selector: 'app-poster-details',
    templateUrl: './poster-details.component.html',
    styleUrls: ['./poster-details.component.css'],
})
export class PosterDetailsComponent implements OnInit {
    public posters$: Observable<Posters> = this.store$.pipe(select(selectPosters));
    poster?: Poster;

    constructor(
        private store$: Store<PostersState>,
        private route: ActivatedRoute,
        private posterService: PosterService,
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(({ id }) => {
            this.posters$.subscribe((posters) => (this.poster = posters.find((item) => item?.id === Number(id))));
        });
    }

    onFabClicked(): void {
        this.posterService.toggleToShoppingCart(this.poster?.id);
    }
}
