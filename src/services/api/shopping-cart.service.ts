import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Poster } from 'src/interfaces/poster.interface';
import { GetShoppingCartPosters, RemoveShoppingCartPoster } from 'src/store/actions/shopping-cart.actions';
import { ShoppingCartPostersState } from 'src/store/reducers/shopping-cart.reducer';
import { AuthenticationService } from '../authentication.service';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    constructor(
        private store$: Store<ShoppingCartPostersState>,
        private http: HttpClient,
        private authService: AuthenticationService,
    ) {
        this.authService.getUsername().subscribe((username) => (this.username = username));
    }

    private shoppingCartUrl = 'http://localhost:3000/shopping-cart';
    private username = '';

    getPosters(): void {
        this.http.get(`${this.shoppingCartUrl}/${this.username}`).subscribe((posters: any) => {
            this.store$.dispatch(
                new GetShoppingCartPosters({ posters: posters.map((poster: any) => new Poster(poster)) }),
            );
        });
    }

    removePoster(posterId: string): void {
        this.store$.dispatch(new RemoveShoppingCartPoster({ posterId }));
        this.http
            .put(`${this.shoppingCartUrl}/remove`, { username: this.username, posterId })
            .subscribe((response) => response);
    }

    addPoster(posterId?: string): void {
        this.http
            .put(`${this.shoppingCartUrl}/add`, { username: this.username, posterId })
            .subscribe((response) => response);
    }
}
