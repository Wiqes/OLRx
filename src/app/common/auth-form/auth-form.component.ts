import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
    constructor(private fb: FormBuilder) {}

    @Input() buttonText = '';
    @Output() submitted = new EventEmitter<{ [key: string]: string }>();

    public profileForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    });

    get username(): any {
        return this.profileForm.get('username');
    }

    get password(): any {
        return this.profileForm.get('password');
    }

    ngOnInit(): void {}

    onSubmit(): void {
        this.submitted.emit(this.profileForm.value);
    }
}
