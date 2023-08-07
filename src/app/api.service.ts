import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const BASE_URL = 'https://swapi.dev/api';
const TYPES_URL = [
  'people',
  'films',
  'starships',
  'vehicles',
  'species',
  'planets',
];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(type: string): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/${type}`);
  }

  getAllTypes(): Observable<string[]> {
    return of(TYPES_URL);
  }
}
