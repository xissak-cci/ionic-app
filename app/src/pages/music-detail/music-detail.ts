import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { FavouritePage } from '../favourite/favourite';
import { Media, MediaObject } from '@ionic-native/media';
/**
 * Generated class for the MusicDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music-detail',
  templateUrl: 'music-detail.html',
})
export class MusicDetailPage {
  public musicDetails = {};
  private songMedia: MediaObject = null;
  private isMusicPaused = false;
  public isMusicPlayed: boolean = false;
  public isMusicInPause = false;

  constructor(private toastController: ToastController, private musicProvider: MusicProvider, public navCtrl: NavController, public navParams: NavParams, private mediaPlugin: Media) {
    this.musicDetails = this.navParams.get("musicDetails");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicDetailPage');
    //this.musicDetails = this.navParams.get("musicDetails");
    // console.log(this.musicDetails)
  }

  addToFavourite(event) {
    this.musicProvider.addToFavourites(this.musicDetails);
    let addToFavouriteToast = this.toastController.create({
      message: 'Added to Favourite',
      duration: 2000
    });
    addToFavouriteToast.present();
  }
  goToFavouritePage() {
    this.navCtrl.push(FavouritePage);
  }

  ionViewWillLeave() {
    this.stopMusic();
  }

  playMusic() {
    this.isMusicPlayed = true;
    this.isMusicInPause = false;
    if (this.songMedia === null) {
      this.songMedia = this.mediaPlugin.create(this.musicDetails["music_url"]);
      this.songMedia.play();
    }
    else {
      if (this.isMusicPaused === true) {
        this.songMedia.play();
        this.isMusicPaused = false;
      }
    }
  }


  pauseMusic() {
    this.isMusicPlayed = true;
    this.isMusicInPause = true;
    if (this.songMedia != null) {
      this.songMedia.pause();
      this.isMusicPaused = true;
    }
  }
  stopMusic() {
    this.isMusicPlayed = false;
    if (this.songMedia != null) {
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia = null;
    }
  }

}
