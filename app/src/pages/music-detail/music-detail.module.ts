import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicDetailPage } from './music-detail';

@NgModule({
  declarations: [
    MusicDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicDetailPage),
  ],
})
export class MusicDetailPageModule {}
