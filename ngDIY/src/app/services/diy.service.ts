import { Diy } from './../models/diy';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiyService {

  private baseUrl = 'http://localhost:8085/'; // adjust port to match server
  private url = this.baseUrl + 'api/projects';

  constructor(
    private http: HttpClient
  ) { }

  show(DiyId: number): Observable<Diy> {
    return this.http.get<Diy>(this.url + '/' + DiyId).pipe(
    )
  }

  index(): Observable<Diy[]> {
    return this.http.get<Diy[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('DIYService.index(): error retrieving todo: ' + err)
        );
      })
    );
  };

  create(proj: Diy): Observable<Diy> {
    return this.http.post<Diy>(this.url, proj).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('DiyService.index(): error creating project: ' + err)
        );
      })
    );
  }

  update(proj: Diy): Observable<Diy> {
    return this.http.put<Diy>(this.url + "/" + proj.id, proj).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.index(): error retrieving todo: ' + err)
        );
      })
    )
  }

  delete(id: Number): Observable<Diy> {
    return this.http.delete<Diy>(this.url + "/" + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.index(): error retrieving todo: ' + err)
        );
      })
    )
  }


}
