import { Component, OnInit } from '@angular/core';
import { RestService, Section, Scout, Scout_Sections } from '../rest.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  // Instanciate sections array
  sections: Section[] = [];

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getSections();
  }

  // Get all sections
  getSections() {
    this.rest.getSections().subscribe((data: {}) => {
      console.log(data);
      this.sections = data as Section[];
    });
  }
  // Get section by id
  getSection(id: Section["id"]) {
    this.rest.getSection(id).subscribe((data: {}) => {
      console.log(data);
      this.sections = data as Section[];
    });
  }
  // Navigate to scout form
  add() {
    this.router.navigate(['/scout-form']);
  }
}
