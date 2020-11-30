import { Injectable } from '@angular/core';
import { Poster } from '../interfaces/poster.interface';
import { Store } from '@ngrx/store';
import { PostersState } from '../store/reducers/posters.reducer';
import { AddPosterAction, AddShoppingCartFlag, RemoveShoppingCartFlag } from '../store/actions/posters.actions';

@Injectable({
    providedIn: 'root',
})
export class PosterService {
    constructor(private store$: Store<PostersState>) {}

    addPoster(poster: Poster): void {
        this.store$.dispatch(new AddPosterAction({ poster }));
    }

    addShoppingCartFlag(posterId?: number): void {
        this.store$.dispatch(new AddShoppingCartFlag({ posterId }));
    }

    removeShoppingCartFlag(posterId?: number): void {
        this.store$.dispatch(new RemoveShoppingCartFlag({ posterId }));
    }
}
