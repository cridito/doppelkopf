import { Injectable } from '@angular/core';
import { Nickname } from './nickname';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NicknamesService {

  nicknames: Nickname[] = [
    {id: 100, name: "Andy"},
    {id: 101, name: "Phillip"},
    {id: 102, name: "Robert"},
    {id: 103, name: "Michael"}
  ]

  constructor(
    private http: HttpClient
  ) {
  }

  getNicknames(): Observable<Nickname[]>{
    return of(this.nicknames);
    //return this.http.get<any>(this.url);
  }




}
