import { Component, Input, OnInit } from '@angular/core';

export interface Poster {
    title: string;
    sellerName: string;
    price: number;
    description: string;
}

@Component({
    selector: 'app-poster',
    templateUrl: './poster.component.html',
    styleUrls: ['./poster.component.css'],
})
export class PosterComponent implements OnInit {
    constructor() {}

    @Input() poster: any;

    ngOnInit(): void {}
}
