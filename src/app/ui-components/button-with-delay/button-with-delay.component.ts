import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { delay, takeUntil } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'app-button-with-delay',
    templateUrl: './button-with-delay.component.html',
    styleUrls: ['./button-with-delay.component.scss'],
})
export class ButtonWithDelayComponent implements OnInit {
    @Input() text = 'Button';
    @Input() type = 'button';
    @Input() color: ThemePalette = 'primary';
    @Input() disabled = false;
    @Output() clicked = new EventEmitter<MouseEvent>();

    public waiting = false;
    private calls = new Subject();

    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit(): void {}

    invokeDelay(): Observable<string> {
        return of('').pipe(delay(2000));
    }

    onButtonClick(event: MouseEvent): void {
        if (!this.waiting) {
            this.clicked.emit(event);
        }
        this.waiting = true;
        const buttonElement: HTMLElement = this.document.getElementById('butt') as HTMLElement;
        event.stopPropagation();
        buttonElement.click();
        this.calls.next(true);
        this.invokeDelay()
            .pipe(takeUntil(this.calls))
            .subscribe(() => {
                this.waiting = false;
            });
    }
}
