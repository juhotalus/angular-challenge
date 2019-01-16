import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Dataunit } from './dataunit';
import { DATA } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<Dataunit[]> {
    return of (DATA);
  }
}
