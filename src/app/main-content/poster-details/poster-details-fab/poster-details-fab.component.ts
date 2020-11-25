import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-poster-details-fab',
    templateUrl: './poster-details-fab.component.html',
    styleUrls: ['./poster-details-fab.component.css'],
})
export class PosterDetailsFABComponent implements OnInit, OnChanges {
    @Input() isInShoppingCart?: boolean;
    @Output() fabClicked = new EventEmitter<boolean>();

    buttonText = 'POSTER.ADD-TO-CAR';

    constructor() {}

    ngOnInit(): void {}

    onAddToCartClick(): void {
        this.fabClicked.emit();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.isInShoppingCart?.currentValue) {
            this.buttonText = 'POSTER.REMOVE-FROM-CART';
        } else {
            this.buttonText = 'POSTER.ADD-TO-CART';
        }
    }
}