import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  public urlRoot = 'https://pokeapi.co/api/v2';

  constructor(
    private http?: HttpClient
  ) { }
  get(path, params = {}): Observable<any> {
    return this.http.get(`${this.urlRoot}${path}`, {
      params
    });
  }
}
