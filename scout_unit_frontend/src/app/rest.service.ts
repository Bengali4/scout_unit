import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/';



// Export interface scout
export interface Scout {
  id: number;
  first_name: string;
  name: string;
  totem: string;
  quali: string;
  email: string;
  sections: Array<Section>;
  scout_sections: Array<Scout_Sections>;
}

// Export interface section
export interface Section {
  id: number;
  name: string;
  description: string;
  scouts: Array<Scout>;
  scout_sections: Array<any>;
}

// Export interface scout_sections
export interface Scout_Sections {
  sectionId: number;
  scoutId: number;
  from: number;
  to: number;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  // Get all sections
  getSections(): Observable<any> {
    return this.http.get(endpoint + 'section');
  }
  // Get section by id
  getSection(id: Section["id"]): Observable<any> {
    return this.http.get(endpoint + 'section/' + id);
  }
  // Get all scouts
  getScouts(): Observable<any> {
    return this.http.get(endpoint + 'scout');
  }
  // Get scout by id
  getScout(id: Scout["id"]): Observable<any> {
    return this.http.get(endpoint + 'scout/' + id);
  }
  // Add scout
  addScout(scout: Scout): Observable<any> {
    return this.http.post(endpoint + 'scout', scout);
  }
  // Add scout to section
  addScoutToSection(scout_sections: Scout_Sections): Observable<any> {
    return this.http.post(endpoint + 'scout_section', scout_sections);
  }

}
