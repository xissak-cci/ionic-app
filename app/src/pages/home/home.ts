import { Component } from '@angular/core';
// import { Http } from '@angular/http';
// import "rxjs/add/operator/map";
import { NavController, LoadingController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { MusicDetailPage } from '../music-detail/music-detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic = [];

  constructor(private musicProvider: MusicProvider, private loadingController: LoadingController, public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    let allMusicLoadingController = this.loadingController.create({
      content: "Getting your Music from Server..."
    });
    allMusicLoadingController.present();
    this.musicProvider.getMusic().subscribe((musicList) => {
      allMusicLoadingController.dismiss();
      this.allMusic = musicList
    });
  }

  goToMusicDetailPage(music) {
    this.navCtrl.push(MusicDetailPage, {
      musicDetails: music
    });
  }
}
