import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BasicHighlightDirective} from './basic-highlight.directive';

import { AppComponent } from './app.component';
import { BetterDirectiveDirective } from './better-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
