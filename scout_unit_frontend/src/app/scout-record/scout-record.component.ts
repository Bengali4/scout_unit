import { Component, OnInit } from '@angular/core';
import { RestService, Section, Scout, Scout_Sections } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scout-record',
  templateUrl: './scout-record.component.html',
  styleUrls: ['./scout-record.component.css']
})
export class ScoutRecordComponent implements OnInit {

  
  scout: Scout = { id: 0, first_name: '', name: '', totem: '', quali: '', email: '', sections:Array<Section>(), scout_sections:Array<any>() };
  section: Section = { id: 0, name: '', description: '', scouts: Array<Scout>(), scout_sections:Array<any>() };
  from_to : any = { from: 0, to: 0 };
  scout_sections : Map<string, any> = new Map<string, any>();
  scout_id: number = 0;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getScout_id();
  }

  // Get scout by id
  getScout(id: Scout["id"]) {
    this.rest.getScout(id).subscribe((scout: Scout) => {
      scout.sections.forEach(section => {
        this.section = section;
        this.from_to = section.scout_sections;
        this.scout_sections.set(this.section.name, this.from_to);
      });
      this.scout = scout as Scout;
    });
  }
  // Get id parameter from url
  getScout_id() {
    this.route.queryParams.subscribe(params => {
      this.scout_id = params['scout_id'];
      this.getScout(params['scout_id']);
    });
  }
  //Redirect to section form
  addSection() {
    this.router.navigate(['/section-form'], { queryParams: { scout_id: this.scout_id } });
  }
  //Redirect to section
  showSections() {
    this.router.navigate(['/section']);
  }
  
  //Delete scout_sections
  deleteScout_sections(sectionId: Scout_Sections["sectionId"], scoutId: Scout_Sections["scoutId"]) {
    this.rest.deleteScout_Sections(sectionId, scoutId).subscribe((result: any) => {
      this.getScout(this.scout_id);
    }, (err: any) => {
      console.log(err);
    });
  }

}
