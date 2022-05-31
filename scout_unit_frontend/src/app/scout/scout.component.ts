import { Component, OnInit } from '@angular/core';
import { RestService, Section, Scout, Scout_Sections } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.css']
})
export class ScoutComponent implements OnInit {

  scouts: Scout[] = [];

  constructor(public rest: RestService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getScouts();
  }

  //Get all scouts
  getScouts() {
    this.rest.getScouts().subscribe((data: {}) => {
      this.scouts = data as Scout[];
    });
  }	
  //Navigate to scout-record
  showScout(id: Scout["id"]) {
    this.router.navigate(['/scout-record'], { queryParams: { scout_id: id } });
  }
  //Redirect to section
  showSections() {
    this.router.navigate(['/section']);
  }

}
