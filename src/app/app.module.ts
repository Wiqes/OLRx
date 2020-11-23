import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MenuModule } from './menu/menu.module';
import { PostersModule } from './main-content/posters/posters.module';
import { ProfileModule } from './main-content/profile/profile.module';
import { DeliveryModule } from './main-content/delivery/delivery.module';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from '../store';
import { PosterFormModule } from './main-content/poster-form/poster-form.module';
import { EffectsModule } from '@ngrx/effects';
import { PosterEffects } from '../effects/poster.effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            },
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([PosterEffects]),
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        ToolbarModule,
        MenuModule,
        PostersModule,
        ProfileModule,
        DeliveryModule,
        PosterFormModule,
    ],
    providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
    bootstrap: [AppComponent],
})
export class AppModule {}
