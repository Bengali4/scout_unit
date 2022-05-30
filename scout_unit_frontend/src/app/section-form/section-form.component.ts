import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {

  scout_sections = { section_id: 0, scout_id: 0, from: 0, to: 0 };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  addScoutToSection() {
    this.rest.addScoutToSection(this.scout_sections).subscribe((result: any) => {
      this.router.navigate(['/scout-record/' + result.id]);
    }, (err: any) => {
      console.log(err);
    });
  }
}
