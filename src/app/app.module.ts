import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { BandNameGeneratorComponent } from './band-name-picker/band-name-picker.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        BandNameGeneratorComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        BandNameGeneratorComponent
    ]
})
export class AppModule {

    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        const el = createCustomElement(
            BandNameGeneratorComponent,
            { injector: this.injector }
        );

        customElements.define('band-name-generator', el);
    }
}
