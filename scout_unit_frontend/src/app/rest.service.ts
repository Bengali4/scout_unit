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
}

// Export interface section
export interface Section {
  id: number;
  name: string;
  description: string;
  //scouts: Scout[];
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  // Get all sections
  getSections() {
    return this.http.get(endpoint + 'section');
  }
  // Get section by id
  getSection(id: Section["id"]) {
    return this.http.get(endpoint + 'section/' + id);
  }
}
