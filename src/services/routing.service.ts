import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RoutingService {
    path?: Observable<string>;

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((x) => {
            this.path = x.url;
        });
        this.path = this.router.events.pipe(
            filter((event: any) => event instanceof NavigationEnd),
            map((event) => event.url.slice(1)),
        );
    }

    navigate(routePath: string, routeParam?: number): void {
        const param = routeParam ? `/${routeParam}` : '';

        this.router.navigate([`/${routePath}${param}`]);
    }
}
