import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThingiverseapiService {
  API_KEY = 'fc83eaee296a2557a0a15c755b6d896d'

  constructor(private httpClient: HttpClient) { }

  getFutureCollection() {
    return this.httpClient.get( `https://api.thingiverse.com/collections/31370927/things?access_token=${this.API_KEY}`)
  }
}
