import { Component, Input, OnInit } from '@angular/core';
import { Poster } from 'src/interfaces/poster.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-poster',
    templateUrl: './poster.component.html',
    styleUrls: ['./poster.component.css'],
})
export class PosterComponent implements OnInit {
    constructor(private router: Router) {}

    @Input() poster?: Poster;
    @Input() details?: boolean;

    ngOnInit(): void {}

    onBuyClick(id?: number): void {
        this.router.navigate([`/poster/details/${id}`]);
    }
}
