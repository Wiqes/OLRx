import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Poster } from 'src/interfaces/poster.interface';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { GetShoppingCartPosters } from 'src/store/actions/shopping-cart.actions';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    constructor(private store$: Store<PostersState>, private http: HttpClient) {}

    private postersUrl = 'http://localhost:3000/shopping-cart';

    getPosters(): void {
        this.http.get(this.postersUrl).subscribe((posters: any) => {
            this.store$.dispatch(
                new GetShoppingCartPosters({ posters: posters.map((poster: any) => new Poster(poster)) }),
            );
        });
    }
}
