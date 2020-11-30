import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { Poster, Posters } from 'src/interfaces/poster.interface';
import { selectPosters } from 'src/store/selectors/posters.selectors';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class ShoppingCartComponent implements OnInit {
    constructor(private store$: Store<PostersState>) {
        this.store$
            .pipe(select(selectPosters))
            .subscribe((posters) => (this.dataSource = posters.filter((poster) => poster?.isInShoppingCart)));
    }

    public dataSource: Posters = [];
    columnsToDisplay = ['id', 'title', 'sellerName', 'price'];
    expandedElement?: Poster | null;

    ngOnInit(): void {}
}
