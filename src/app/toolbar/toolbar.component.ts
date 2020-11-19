import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router) {}

    @Input() menuContainer: any;

    ngOnInit(): void {}

    onHomeClick(): void {
        this.router.navigate(['/posters']);
    }
}
