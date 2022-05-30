import { Component, OnInit } from '@angular/core';
import { RestService, Section, Scout, Scout_Sections} from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scout-form',
  templateUrl: './scout-form.component.html',
  styleUrls: ['./scout-form.component.css']
})
export class ScoutFormComponent implements OnInit {

  scout = { id: 0, first_name: '', name: '', totem: '', quali: '', email: '', sections: Array<Section>(), scout_sections:Array<Scout_Sections>() };
  
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
  }

  addScout() {
    this.rest.addScout(this.scout).subscribe((result: any) => {
      this.scout.id = result.id;
      this.router.navigate(['/scout-record'], { queryParams: { scout_id: this.scout.id } });
    }, (err: any) => {
      console.log(err);
    });
  }
}
