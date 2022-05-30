import { Component, OnInit } from '@angular/core';
import { RestService, Section, Scout, Scout_Sections } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select'; 

interface SectionInterface {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})


/* /**
 * @title Select in a form
 */
/*  @Component({
  selector: 'select-form-example',
  templateUrl: 'select-form-example.html',
}) */ 
export class SectionFormComponent implements OnInit {

  scout_sections = { sectionId: 0, scoutId: 0, from: 0, to: 0 };
  // Instancied scout_id variable
  scout_id: number = 0;
  sections: Array<any> = [];
  selected_section_id: number = 0;
  selected_section_name: string = '';
  sectionInterfaces: SectionInterface[] = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('in section form');
    this.getScout_id();
    this.getSections();
  }
  // Add scout to section
  addScoutToSection() {
    this.scout_sections.scoutId = this.scout_id;
    this.scout_sections.sectionId = this.selected_section_id;
    console.log(this.scout_sections);
    this.rest.addScoutToSection(this.scout_sections).subscribe((result: any) => {
      this.router.navigate(['/scout-record'], { queryParams: { scout_id: this.scout_id } });
    }, (err: any) => {
      console.log(err);
    });
  }

  // Get id parameter from url
  getScout_id() {
    this.route.queryParams.subscribe(params => {
      this.scout_id = params['scout_id'];
    });
  }

  // Get all sections
  getSections() {
    this.rest.getSections().subscribe((data: {}) => {
      console.log(data);
      this.sections = data as Array<any>;
      this.sections.forEach(section => {
        this.sectionInterfaces.push({ value: section.id, viewValue: section.name });
      });
    });
    console.log(this.sectionInterfaces);
  }
  
}
