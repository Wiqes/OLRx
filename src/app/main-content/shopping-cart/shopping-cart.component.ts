import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { Poster, Posters } from 'src/interfaces/poster.interface';
import { PosterService } from 'src/services/api/poster.service';
import { filesUrl, noPhotoUrl } from 'src/constants/urls';
import { selectShoppingCartPosters } from 'src/store/selectors/shopping-cart.selectors';
import { ShoppingCartService } from 'src/services/api/shopping-cart.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
    providers: [PosterService],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class ShoppingCartComponent implements OnInit {
    constructor(
        private store$: Store<PostersState>,
        private posterService: PosterService,
        private shoppingCartService: ShoppingCartService,
    ) {
        this.store$.pipe(select(selectShoppingCartPosters)).subscribe((posters) => (this.dataSource = posters));
    }

    public dataSource: Posters = [];
    public columnsToDisplay = ['id', 'title', 'sellerName', 'price', 'action'];
    public expandedElement?: Poster | null;
    public mouseOver = false;

    ngOnInit(): void {
        this.shoppingCartService.getPosters();
    }

    onRemoveClick(posterId: string): void {
        this.posterService.removeShoppingCartFlag(posterId);
    }

    onExpandClick(element: Poster): void {
        this.expandedElement = this.mouseOver || this.expandedElement === element ? null : element;
    }
    getImageUrl(element: Poster): string {
        if (element?.photo) {
            return `${filesUrl}${element?.photo}`;
        } else {
            return noPhotoUrl;
        }
    }
}
