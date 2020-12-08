import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Poster } from 'src/interfaces/poster.interface';
import { PostersState } from 'src/store/reducers/posters.reducer';
import {
    AddPosterAction,
    AddShoppingCartFlag,
    GetPosters,
    RemoveShoppingCartFlag,
} from 'src/store/actions/posters.actions';

@Injectable({
    providedIn: 'root',
})
export class PosterService {
    constructor(private store$: Store<PostersState>, private http: HttpClient) {}

    private postersUrl = 'http://localhost:3000/posters';

    addPoster(poster: Poster): void {
        this.store$.dispatch(new AddPosterAction({ poster }));
        this.http.post(this.postersUrl, poster).subscribe((response) => response);
    }

    addShoppingCartFlag(posterId?: string): void {
        this.store$.dispatch(new AddShoppingCartFlag({ posterId }));
        this.http.put(`${this.postersUrl}/${posterId}`, { isInShoppingCart: true }).subscribe((response) => response);
    }

    removeShoppingCartFlag(posterId?: string): void {
        this.store$.dispatch(new RemoveShoppingCartFlag({ posterId }));
        this.http.put(`${this.postersUrl}/${posterId}`, { isInShoppingCart: false }).subscribe((response) => response);
    }

    getPosters(): void {
        this.http.get(this.postersUrl).subscribe((posters: any) => {
            this.store$.dispatch(new GetPosters({ posters: posters.map((poster: any) => new Poster(poster)) }));
        });
    }
}
