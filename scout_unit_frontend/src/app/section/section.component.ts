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
  from: number = 0;
  to: number = 0;

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
  // Get section by id
  getSection(id: Section["id"]) {
    this.rest.getSection(id).subscribe((section: Section) => {
      this.scouts = section.scouts;
    });
  }
  // Navigate to scout form
  add() {
    this.router.navigate(['/scout-form']);
  }
  // Redirect to scouts
  listScouts() {
    this.router.navigate(['/scout']);
  }

}
