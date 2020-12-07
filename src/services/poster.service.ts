import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Poster, Posters } from '../interfaces/poster.interface';
import { PostersState } from '../store/reducers/posters.reducer';
import {
    AddPosterAction,
    AddShoppingCartFlag,
    GetPosters,
    RemoveShoppingCartFlag,
} from '../store/actions/posters.actions';

@Injectable({
    providedIn: 'root',
})
export class PosterService {
    constructor(private store$: Store<PostersState>, private http: HttpClient) {}

    addPoster(poster: Poster): void {
        this.store$.dispatch(new AddPosterAction({ poster }));
    }

    addShoppingCartFlag(posterId?: string): void {
        this.store$.dispatch(new AddShoppingCartFlag({ posterId }));
    }

    removeShoppingCartFlag(posterId?: string): void {
        this.store$.dispatch(new RemoveShoppingCartFlag({ posterId }));
    }

    getPosters(): void {
        this.http.get('http://localhost:3000/posters').subscribe((posters: any) => {
            console.log(posters.map((poster: any) => new Poster(poster)));
            this.store$.dispatch(new GetPosters({ posters: posters.map((poster: any) => new Poster(poster)) }));
        });
    }
}
