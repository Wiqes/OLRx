import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { selectPosters } from 'src/store/selectors/posters.selectors';
import { Posters } from 'src/interfaces/poster.interface';

@Component({
    selector: 'app-posters',
    templateUrl: './posters.component.html',
    styleUrls: ['./posters.component.scss'],
})
export class PostersComponent implements OnInit {
    constructor(private store$: Store<PostersState>) {
        this.store$
            .pipe(select(selectPosters))
            .subscribe((posters) => (this.posters$ = posters.filter((poster) => !poster?.isInShoppingCart)));
    }

    public posters$: Posters = [];

    ngOnInit(): void {}
}
