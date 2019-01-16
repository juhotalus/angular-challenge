import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Dataunit } from './dataunit';
import { DATA } from './mock-data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<Dataunit[]> {
    //this.messageService.add('DataService: fetched data');
    //return of (DATA);
    return this.http.get<Dataunit[]>(this.dataUrl)
    .pipe(
      tap(_ => this.log('fetched data')),
      catchError(this.handleError('getData', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a DataService message with the MessageService */
  private log(message: string) {
    console.log(`DataService: ${message}`)
  }
}
