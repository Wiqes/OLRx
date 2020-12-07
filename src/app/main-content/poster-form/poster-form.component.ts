import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PosterService } from 'src/services/poster.service';
import { RoutingService } from 'src/services/routing.service';
import { RoutesPaths } from 'src/constants/routes-pathes';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFileService } from 'src/services/upload-file.service';
import { AbleToBeUndefined } from 'src/interfaces/able-to-be-undefined.interface';
import { filesUrl, noPhotoUrl } from 'src/constants/urls';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-poster-form',
    templateUrl: './poster-form.component.html',
    styleUrls: ['./poster-form.component.scss'],
    providers: [PosterService, RoutingService, UploadFileService],
})
export class PosterFormComponent {
    public profileForm = this.fb.group({
        title: ['', Validators.required],
        sellerName: ['', Validators.required],
        price: ['', [Validators.required, Validators.pattern('\\d+')]],
        description: [''],
    });
    public selectedFiles: AbleToBeUndefined<FileList>;
    public currentFile: AbleToBeUndefined<File>;
    public progress = 0;
    public message = '';
    public imageUrl = noPhotoUrl;
    private imageName = '';

    constructor(
        private fb: FormBuilder,
        @Inject(DOCUMENT) private document: Document,
        private posterService: PosterService,
        private routingService: RoutingService,
        private uploadService: UploadFileService,
    ) {}

    get title(): any {
        return this.profileForm.get('title');
    }

    get sellerName(): any {
        return this.profileForm.get('sellerName');
    }

    get price(): any {
        return this.profileForm.get('price');
    }

    get description(): any {
        return this.profileForm.get('description');
    }

    onSubmit(): void {
        const { title, sellerName, price, description } = this.profileForm.value;

        // the id should be unique and generated on the server-side
        this.posterService.addPoster({
            id: '222',
            title,
            photo: this.imageName,
            isInShoppingCart: false,
            sellerName,
            price,
            description,
        });

        this.routingService.navigate(RoutesPaths.Posters);
    }

    onEditClick(): void {
        const fileInput = this.document.createElement('input');
        fileInput.type = 'file';
        fromEvent(fileInput, 'change')
            .pipe(first())
            .subscribe(
                (event) => {
                    const target = event.target as HTMLInputElement;
                    this.selectedFiles = target?.files;
                    this.currentFile = this.selectedFiles?.item(0);
                    this.uploadService.upload(this.currentFile).subscribe(
                        (httpEvent) => {
                            if (httpEvent.type === HttpEventType.UploadProgress) {
                                const divider = httpEvent.total || 1;
                                this.progress = Math.round((100 * httpEvent.loaded) / divider);
                            } else if (httpEvent instanceof HttpResponse) {
                                this.imageUrl = `${filesUrl}${httpEvent.body?.fileName}`;
                                this.imageName = httpEvent.body?.fileName;
                            }
                        },
                        (err) => {
                            this.progress = 0;
                            this.message = 'Could not upload the file!';
                            this.currentFile = undefined;
                        },
                    );

                    this.selectedFiles = undefined;
                },
                () => console.log('Upload error'),
                () => console.log('Upload completed'),
            );
        fileInput.click();
    }
}
