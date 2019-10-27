import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyanswearPage } from './surveyanswear';
import { IonicStorageModule } from '@ionic/storage'; 

@NgModule({
  declarations: [
    SurveyanswearPage,
  ],
  imports: [
  	IonicStorageModule.forRoot(),
    IonicPageModule.forChild(SurveyanswearPage),
  ],  
    exports: [
    SurveyanswearPage
  ]
})
export class SurveyanswearPageModule {}
