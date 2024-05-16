import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoredService {

  constructor( private http: HttpClient ) { }

  getFact() {
    return this.http.get('https://www.boredapi.com/api/activity')
  }
}
