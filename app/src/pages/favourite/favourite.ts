import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { MusicDetailPage } from '../music-detail/music-detail';

/**
 * Generated class for the FavouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage {
  public favouriteSongs = [];

  constructor(private musicProvider: MusicProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritePage');
    this.favouriteSongs = this.musicProvider.getFavourite();
  }

  goToMusicDetailPage(music) {
    this.navCtrl.push(MusicDetailPage, {
      musicDetails: music
    });
  }


}
