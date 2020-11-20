import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostersState } from 'src/store/reducers/posters.reducer';
import { AddPosterAction } from '../../store/actions/posters.actions';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router, private store$: Store<PostersState>) {}

    ngOnInit(): void {}

    onProfileClick(): void {
        this.router.navigate(['/profile']);
    }

    onDeliveryClick(): void {
        this.router.navigate(['/delivery']);
    }

    onAddPosterClick(): void {
        this.store$.dispatch(
            new AddPosterAction({
                title: 'New Poster',
                sellerName: 'Sellers Name',
                price: 220,
                description: 'Some some some some some some some',
            }),
        );
    }
}
