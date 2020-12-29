import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Poster } from 'src/interfaces/poster.interface';
import { GetShoppingCartPosters, RemoveShoppingCartPoster } from 'src/store/actions/shopping-cart.actions';
import { ShoppingCartPostersState } from 'src/store/reducers/shopping-cart.reducer';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    constructor(private store$: Store<ShoppingCartPostersState>, private http: HttpClient) {}

    private shoppingCartUrl = 'http://localhost:3000/shopping-cart';

    getPosters(): void {
        this.http.get(`${this.shoppingCartUrl}`).subscribe((posters: any) => {
            this.store$.dispatch(
                new GetShoppingCartPosters({ posters: posters.map((poster: any) => new Poster(poster)) }),
            );
        });
    }

    removePoster(posterId?: string): void {
        this.store$.dispatch(new RemoveShoppingCartPoster({ posterId }));
        this.http.put(`${this.shoppingCartUrl}/remove/${posterId}`, {}).subscribe((response) => response);
    }

    addPoster(posterId?: string): void {
        this.http.put(`${this.shoppingCartUrl}/add/${posterId}`, {}).subscribe((response) => response);
    }
}
