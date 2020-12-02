import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PosterService } from 'src/services/poster.service';
import { RoutingService } from 'src/services/routing.service';
import { RoutesPaths } from 'src/constants/routes-pathes';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFileService } from 'src/services/upload-file.service';
import { AbleToBeUndefined } from 'src/interfaces/able-to-be-undefined.interface';
import { filesUrl, noPhotoUrl } from 'src/constants/urls';

@Component({
    selector: 'app-poster-form',
    templateUrl: './poster-form.component.html',
    styleUrls: ['./poster-form.component.scss'],
    providers: [PosterService, RoutingService, UploadFileService],
})
export class PosterFormComponent {
    profileForm = this.fb.group({
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

    constructor(
        private fb: FormBuilder,
        private posterService: PosterService,
        private routingService: RoutingService,
        private uploadService: UploadFileService,
    ) {}

    selectFile(event: any): void {
        this.selectedFiles = event.target.files;

        this.currentFile = this.selectedFiles?.item(0);
        this.imageUrl = `${filesUrl}${this.currentFile?.name}`;
        this.uploadService.upload(this.currentFile).subscribe(
            (httpEvent) => {
                if (httpEvent.type === HttpEventType.UploadProgress) {
                    const divider = httpEvent.total || 1;
                    this.progress = Math.round((100 * httpEvent.loaded) / divider);
                } else if (httpEvent instanceof HttpResponse) {
                    this.message = event.body?.message;
                }
            },
            (err) => {
                this.progress = 0;
                this.message = 'Could not upload the file!';
                this.currentFile = undefined;
            },
        );

        this.selectedFiles = undefined;
    }

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
            id: 222,
            title,
            photo: this.currentFile?.name,
            isInShoppingCart: false,
            sellerName,
            price,
            description,
        });

        this.routingService.navigate(RoutesPaths.Posters);
    }
}
