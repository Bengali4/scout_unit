import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SectionComponent } from './section/section.component';
import { SectionFormComponent } from './section-form/section-form.component';
import { ScoutComponent } from './scout/scout.component';
import { ScoutFormComponent } from './scout-form/scout-form.component';
import { ScoutRecordComponent } from './scout-record/scout-record.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    ScoutComponent,
    ScoutFormComponent,
    ScoutRecordComponent,
    SectionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
