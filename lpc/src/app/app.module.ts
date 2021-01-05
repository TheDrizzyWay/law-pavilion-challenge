import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { EducationPageComponent } from './components/education-page/education-page.component';
import { WorkPageComponent } from './components/work-page/work-page.component';
import { PhotoPageComponent } from './components/photo-page/photo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    EducationPageComponent,
    WorkPageComponent,
    PhotoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
