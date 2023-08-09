import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

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
    const url = `${BASE_URL}/${type}`;
    const urlObj = localStorage.getItem(url);
    if (urlObj != null) {
      return of(JSON.parse(urlObj));
    } else {
      return this.http
        .get<any>(url)
        .pipe(
          tap((urlObj) => localStorage.setItem(url, JSON.stringify(urlObj)))
        );
    }
  }
  getUrl(url: string): Observable<any> {
    const urlObj = localStorage.getItem(url);
    if (urlObj != null) {
      return of(JSON.parse(urlObj));
    } else {
      return this.http
        .get<any>(url)
        .pipe(
          tap((urlObj) => localStorage.setItem(url, JSON.stringify(urlObj)))
        );
    }
  }

  getAllTypes(): Observable<string[]> {
    return of(TYPES_URL);
  }
}
