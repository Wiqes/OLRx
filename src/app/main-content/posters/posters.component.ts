import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { selectPosters } from 'src/store/selectors/posters.selectors';
import { Posters } from 'src/interfaces/poster.interface';
import { PosterService } from 'src/services/api/poster.service';

@Component({
    selector: 'app-posters',
    templateUrl: './posters.component.html',
    styleUrls: ['./posters.component.scss'],
    providers: [PosterService],
})
export class PostersComponent implements OnInit {
    constructor(private store$: Store<PostersState>, private posterService: PosterService) {
        this.store$
            .pipe(select(selectPosters))
            .subscribe((posters) => (this.posters$ = posters.filter((poster) => !poster?.isInShoppingCart)));
    }

    public posters$: Posters = [];

    ngOnInit(): void {
        this.posterService.getPosters();
    }
}
