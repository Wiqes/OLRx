import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { selectPosters } from 'src/store/selectors/posters.selectors';
import { Poster } from '../../../interfaces/poster.interface';

@Component({
    selector: 'app-posters',
    templateUrl: './posters.component.html',
    styleUrls: ['./posters.component.css'],
})
export class PostersComponent implements OnInit {
    public posters$: Observable<Array<Poster>> = this.store$.pipe(select(selectPosters));

    constructor(private store$: Store<PostersState>) {}

    ngOnInit(): void {}
}
