import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Card } from 'card';
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url: string = "http://localhost/assets";
  cards: Card[] = [
  {
    name: OE,
    caption: Obereichel,
    valence: 2,
    value: 3,
    trump: false,
    url: this.url + ""
  },
  {
    name: OG,
    caption: Obergrün,
    valence: 2,
    value: 3,
    trump: false,
    url: this.url + "" },
  {
    name: OR,
    caption: Oberrot,
    valence: 2,
    value: 3,
    trump: false,
 url: this.url + "" },
  {
    name: OS,
    caption: Oberschell,
    valence: 2,
    value: 3,
    trump: false,
 url: this.url + "" },
  {
    name: UE,
    caption: Untereichel,
    valence: 1,
    value: 2,
    trump: false,
 url: this.url + "" },
  {
    name: UG,
    caption: Untergrün,
    valence: 1,
    value: 2,
    trump: false,
 url: this.url + "" },
  {
    name: UR,
    caption: Unterrot,
    valence: 1,
    value: 2,
    trump: false,
 url: this.url + "" },
  {
    name: US,
    caption: Unterschell,
    valence: 1,
    value: 2,
    trump: false,
 url: this.url + "" },
  {
    name: KE,
    caption: Königeichel,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KG,
    caption: Königgrün,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KR,
    caption: Königrot,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KS,
    caption: Königschell,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KE,
    caption: Königeichel,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KG,
    caption: Königgrün,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KR,
    caption: Königrot,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KS,
    caption: Königschell,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KE,
    caption: Königeichel,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KG,
    caption: Königgrün,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KR,
    caption: Königrot,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KS,
    caption: Königschell,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KE,
    caption: Königeichel,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KG,
    caption: Königgrün,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KR,
    caption: Königrot,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: KS,
    caption: Königschell,
    valence: 3,
    value: 4,
    trump: false,
 url: this.url + "" },
  {
    name: ZE,
    caption: Zehneichel,
    valence: 4,
    value: 10,
    trump: false,
 url: this.url + "" },
  {
    name: ZG,
    caption: Zehngrün,
    valence: 4,
    value: 10,
    trump: false,
 url: this.url + "" },
  {
    name: ZR,
    caption: Zehnrot,
    valence: 4,
    value: 10,
    trump: false,
 url: this.url + "" },
  {
    name: ZS,
    caption: Zehnschell,
    valence: 4,
    value: 10,
    trump: false,
 url: this.url + "" },
  {
    name: AE,
    caption: Asseichel,
    valence: 5,
    value: 11,
    trump: false,
 url: this.url + "" },
  {
    name: AG,
    caption: Assgrün,
    valence: 5,
    value: 11,
    trump: false,
 url: this.url + "" },
  {
    name: AR,
    caption: Assrot,
    valence: 5,
    value: 11,
    trump: false,
  url: this.url + "" },
  {
    name: AS,
    caption: Assschell,
    valence: 5,
    value: 11,
    trump: false,
    url: this.url + ""
 }
  ]

  constructor(
    private http: HttpClient
  ) {

  }
}
