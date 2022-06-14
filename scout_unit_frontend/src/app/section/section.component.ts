import { Component, OnInit } from '@angular/core';
import { RestService, Section, Scout, Scout_Sections } from '../rest.service';

import { Router } from '@angular/router';

interface SectionInterface {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  // Instanciate variables
  sections: Section[] = [];
  scouts: Scout[] = [];
  selected_section_id: number = 0;
  selected_section_name: string = '';
  sectionInterfaces: SectionInterface[] = [];
  from: number = 1900;
  to: number = 2100;
  alerte: string = '';

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getSections();
  }

  // Get all sections
  getSections() {
    this.rest.getSections().subscribe((data: {}) => {
      this.sections = data as Section[];
      this.sections.forEach(section => {
        this.sectionInterfaces.push({ value: section.id, viewValue: section.name });
      });
    });
  }
  // Show scouts in section
  showScoutsForSection(id: Section["id"]) {
    // Verify if section is selected
    if (id != 0) {
      this.alerte = '';
      // Verify if from and to are filled
      if (this.from === 0 || this.to === 0) {
        this.rest.getSection(id).subscribe((section: Section) => {
          this.scouts = section.scouts;
        
        });
      } else {
          this.rest.getScoutsInSectionBetween(id, this.from, this.to).subscribe((section: Section) => {
          this.scouts = section.scouts;
        });
      }
    } else {
      this.alerte = "Veuillez choisir une section";
    }
  }
  // Navigate to scout form
  addScout() {
    this.router.navigate(['/scout-form']);
  }
  // Redirect to scouts
  listScouts() {
    this.router.navigate(['/scout']);
  }

}
