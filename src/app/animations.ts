import { trigger, animateChild, group, transition, animate, style, query } from '@angular/animations';

const transitionArray: Array<string> = [];
const animationArray: Array<string> = ['posters', 'profile', 'delivery', 'posterAdding', 'posterDetails'];
animationArray.map((element) => {
    animationArray.map((innerElement) => transitionArray.push(`${element} <=> ${innerElement}`));
});
const transitionString = transitionArray.join();

export const slideInAnimation = trigger('routeAnimation', [
    transition(transitionString, [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            }),
        ]),
        query(':enter', [style({ left: '-100%' })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
            query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
        ]),
        query(':enter', animateChild()),
    ]),
]);
