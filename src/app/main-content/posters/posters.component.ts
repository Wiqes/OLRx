import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { selectPosters } from 'src/store/selectors/posters.selectors';
import { Posters } from 'src/interfaces/poster.interface';
import { selectSnackbar } from 'src/store/selectors/snackbar.selectors';

@Component({
    selector: 'app-posters',
    templateUrl: './posters.component.html',
    styleUrls: ['./posters.component.css'],
})
export class PostersComponent implements OnInit {
    public posters$: Observable<Posters> = this.store$.pipe(select(selectPosters));
    public needSnackbar: Observable<boolean> = this.store$.pipe(select(selectSnackbar));

    constructor(private store$: Store<PostersState>) {}

    ngOnInit(): void {}
}
