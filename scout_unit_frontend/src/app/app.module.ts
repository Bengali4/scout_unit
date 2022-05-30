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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

'@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'; 



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
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
