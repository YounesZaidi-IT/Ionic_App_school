import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesPage } from './activities';
import { IonicStorageModule } from '@ionic/storage'; 

@NgModule({
  declarations: [
    ActivitiesPage,
  ],
  imports: [
  	IonicStorageModule.forRoot(),
    IonicPageModule.forChild(ActivitiesPage),
  ],  
    exports: [
    ActivitiesPage
  ]
})
export class ActivitiesPageModule {}
