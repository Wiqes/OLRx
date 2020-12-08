import { Component, Input, OnInit } from '@angular/core';
import { Posters } from 'src/interfaces/poster.interface';
import { BreakpointObserverService } from 'src/services/breakpoint-observer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-posters-list',
    templateUrl: './posters-list.component.html',
    styleUrls: ['./posters-list.component.scss'],
    providers: [BreakpointObserverService],
})
export class PostersListComponent implements OnInit {
    @Input() posters?: Posters | null;

    public list?: boolean;
    public rowHeight = '1:1.2';

    constructor(private breakpointObserver: BreakpointObserverService, private route: ActivatedRoute) {
        const { layout$ } = breakpointObserver;
        layout$?.subscribe(({ tabletLandscape, webPortrait, webLandscape }) => {
            if (tabletLandscape) {
                this.rowHeight = '1:2';
            }
            if (webPortrait) {
                this.rowHeight = '1:2';
            }
            if (webLandscape) {
                this.rowHeight = '1:1.2';
            }
        });
    }

    ngOnInit(): void {
        this.route.url.subscribe((urlSegment) => {
            this.list = urlSegment[0].path === 'posters';
        });
    }
}
