import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    EducationPageComponent,
    WorkPageComponent,
    PhotoPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
