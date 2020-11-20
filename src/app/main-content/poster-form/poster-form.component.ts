import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PostersState } from '../../../store/reducers/posters.reducer';
import { AddPosterAction } from '../../../store/actions/posters.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-poster-form',
    templateUrl: './poster-form.component.html',
    styleUrls: ['./poster-form.component.css'],
})
export class PosterFormComponent {
    profileForm = this.fb.group({
        title: ['', Validators.required],
        sellerName: ['', Validators.required],
        price: ['', [Validators.required, Validators.pattern('\\d+')]],
        description: [''],
    });

    constructor(
        private fb: FormBuilder,
        private store$: Store<PostersState>,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    get title(): any {
        return this.profileForm.get('title');
    }

    get sellerName(): any {
        return this.profileForm.get('sellerName');
    }

    get price(): any {
        return this.profileForm.get('price');
    }

    get description(): any {
        return this.profileForm.get('description');
    }

    onSubmit(): void {
        const { title, sellerName, price, description } = this.profileForm.value;

        this.store$.dispatch(new AddPosterAction({ title, sellerName, price, description }));

        this.router.navigate(['/posters']);
    }
}
