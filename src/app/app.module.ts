import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleEditorComponent } from './simple-editor/simple-editor.component';
import { SimpleDisplayComponent } from './simple-display/simple-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleEditorComponent,
    SimpleDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
