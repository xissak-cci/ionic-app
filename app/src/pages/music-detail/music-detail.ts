import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.musicDetails = this.navParams.get("musicDetails");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicDetailPage');
    //this.musicDetails = this.navParams.get("musicDetails");
    // console.log(this.musicDetails)
  }

}
