import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Poster } from 'src/interfaces/poster.interface';
import { PostersState } from 'src/store/reducers/posters.reducer';
import {
    AddPosterAction,
    AddShoppingCartFlag,
    GetPosters,
    RemovePosterAction,
    RemoveShoppingCartFlag,
    SetCurrentPoster,
} from 'src/store/actions/posters.actions';
import { selectPoster } from 'src/store/selectors/posters.selectors';
import { UploadFileService } from '../upload-file.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PosterService {
    constructor(
        private store$: Store<PostersState>,
        private http: HttpClient,
        private uploadFileService: UploadFileService,
    ) {}

    private postersUrl = 'http://localhost:3000/posters';

    addPoster(poster: Poster): void {
        this.store$.dispatch(new AddPosterAction({ poster }));
        this.http.post(this.postersUrl, poster).subscribe((response) => response);
    }
    removePoster(posterId?: string): void {
        this.http.delete(`${this.postersUrl}/${posterId}`).subscribe((response) => response);
        this.store$
            .pipe(select(selectPoster(posterId)))
            .subscribe((poster) =>
                this.uploadFileService
                    .removeFile(poster?.photo)
                    .subscribe(() => this.store$.dispatch(new RemovePosterAction({ posterId }))),
            );
    }

    addShoppingCartFlag(posterId?: string): void {
        this.store$.dispatch(new AddShoppingCartFlag({ posterId }));
        this.http.put(`${this.postersUrl}/${posterId}`, { isInShoppingCart: true }).subscribe((response) => response);
    }

    removeShoppingCartFlag(posterId?: string): void {
        this.store$.dispatch(new RemoveShoppingCartFlag({ posterId }));
        this.http.put(`${this.postersUrl}/${posterId}`, { isInShoppingCart: false }).subscribe((response) => response);
    }

    getPosters(): void {
        this.http.get(this.postersUrl).subscribe((posters: any) => {
            this.store$.dispatch(new GetPosters({ posters: posters.map((poster: any) => new Poster(poster)) }));
        });
    }

    getPosterById(posterId: string): Observable<any> {
        return this.http.get(`${this.postersUrl}/${posterId}`).pipe(
            tap((poster: any) => {
                this.store$.dispatch(new SetCurrentPoster({ poster: new Poster(poster) }));
            }),
        );
    }
}
