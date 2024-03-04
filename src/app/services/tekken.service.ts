import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TekkenInterface } from '../types/tekken';

@Injectable({
  providedIn: 'root'
})
export class TekkenService {

  url = 'http://127.0.0.1:8000/'

  constructor(private httpClient: HttpClient) { }

  getLutadores(): Observable<TekkenInterface>{
    return this.httpClient.get<TekkenInterface>(`{this.url}/tekken`);
  }
}
