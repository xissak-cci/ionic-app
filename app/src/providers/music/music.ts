import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import "rxjs/add/operator/map";
/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API: string = "http://orangevalleycaa.org/api/music";
@Injectable()
export class MusicProvider {

  public favouriteSongs = [];

  constructor(public http: Http) {
    console.log('Hello MusicProvider Provider');
  }

  getMusic() {
    return this.http.get(API).map(response => response.json());
  }

  getFavourite() {
    return this.favouriteSongs;
  }
  addToFavourites(song) {
    let isSongAdded = this.favouriteSongs.findIndex((favouriteSongs) => {
      return song.id === favouriteSongs.id;
    });
    if (isSongAdded === -1) {
      this.favouriteSongs.push(song);
    }
  }
}