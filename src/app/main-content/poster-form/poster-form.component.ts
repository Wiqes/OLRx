import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PosterService } from '../../../services/poster.service';

@Component({
    selector: 'app-poster-form',
    templateUrl: './poster-form.component.html',
    styleUrls: ['./poster-form.component.css'],
    providers: [PosterService],
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
        private route: ActivatedRoute,
        private router: Router,
        private posterService: PosterService,
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

        this.posterService.addPoster({ title, sellerName, price, description });

        this.router.navigate(['/posters']);
    }
}
