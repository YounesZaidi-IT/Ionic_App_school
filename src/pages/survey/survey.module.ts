import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyPage } from './survey';
import { IonicStorageModule } from '@ionic/storage'; 

@NgModule({
  declarations: [
    SurveyPage,
  ],
  imports: [
  	IonicStorageModule.forRoot(),
    IonicPageModule.forChild(SurveyPage),
  ],  
    exports: [
    SurveyPage
  ]
})
export class SurveyPageModule {}
