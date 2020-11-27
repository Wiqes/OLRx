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
    public posters$: Observable<Posters> = this.store$.pipe(select(selectPosters));

    constructor(private store$: Store<PostersState>) {}

    ngOnInit(): void {}
}
