import { Component, Input, OnInit } from '@angular/core';
import { Poster } from 'src/interfaces/poster.interface';

@Component({
    selector: 'app-poster',
    templateUrl: './poster.component.html',
    styleUrls: ['./poster.component.css'],
})
export class PosterComponent implements OnInit {
    constructor() {}

    @Input() poster: Poster | undefined;

    ngOnInit(): void {}
}
