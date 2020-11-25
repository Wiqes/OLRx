import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PosterService } from 'src/services/poster.service';
import { RoutingService } from 'src/services/routing.service';
import { RoutesPaths } from 'src/constants/routes-pathes';

@Component({
    selector: 'app-poster-form',
    templateUrl: './poster-form.component.html',
    styleUrls: ['./poster-form.component.css'],
    providers: [PosterService, RoutingService],
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
        private posterService: PosterService,
        private routingService: RoutingService,
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

        // the id should be unique and generated on the server-side
        this.posterService.addPoster({ id: 222, title, isInShoppingCart: false, sellerName, price, description });

        this.routingService.navigate(RoutesPaths.Posters);
    }
}
