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
  
  // Instancied scout_id variable
  scout_id: number = 0;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getScout_id();
  }

  // Get scout by id
  getScout(id: Scout["id"]) {
    this.rest.getScout(id).subscribe((scout: Scout) => {
      console.log(scout);
      scout.sections.forEach(section => {
        this.section = section;
        console.log(this.section);
        this.from_to = section.scout_sections;
        this.scout_sections.set(this.section.name, this.from_to);
      });
      this.scout = scout as Scout;
      console.log(this.scout_sections);
    });
  }
  // // Get all sections
  // getSections() {
  //   this.rest.getSections().subscribe((data: {}) => {
  //     console.log(data);
  //     this.sections_button = data as Section[];
  //   });
  // }

  // Get id parameter from url
  getScout_id() {
    this.route.queryParams.subscribe(params => {
      this.scout_id = params['scout_id'];
      console.log(this.scout_id);
      this.getScout(params['scout_id']);
    });
  }

  //Redirect to section form
  addSection() {
    console.log('click');
    this.router.navigate(['/section-form'], { queryParams: { scout_id: this.scout_id } });
  }

}
