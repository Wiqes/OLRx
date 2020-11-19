import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
    constructor() {}

    @Output() toggledSidenav = new EventEmitter();

    ngOnInit(): void {}

    toggleSidenav(): void {
        this.toggledSidenav.emit();
    }
}
