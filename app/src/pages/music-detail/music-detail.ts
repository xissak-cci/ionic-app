import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { FavouritePage } from '../favourite/favourite';
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

  constructor(private toastController: ToastController, private musicProvider: MusicProvider, public navCtrl: NavController, public navParams: NavParams) {
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


}
