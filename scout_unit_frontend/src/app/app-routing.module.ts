import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { ScoutComponent } from './scout/scout.component';
import { ScoutFormComponent } from './scout-form/scout-form.component';
import { ScoutRecordComponent } from './scout-record/scout-record.component';
import { SectionFormComponent } from './section-form/section-form.component';

const routes: Routes = [
  { path: 'section', component: SectionComponent },
  { path: 'scout', component: ScoutComponent },
  { path: 'scout-record', component: ScoutRecordComponent },
  { path: 'scout-form', component: ScoutFormComponent },
  { path: 'section-form', component: SectionFormComponent },
  { path: '', redirectTo: '/section', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
