import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportsPage } from './reports';
import { IonicStorageModule } from '@ionic/storage'; 

@NgModule({
  declarations: [
    ReportsPage,
  ],
  imports: [
  	IonicStorageModule.forRoot(),
    IonicPageModule.forChild(ReportsPage),
  ],  
    exports: [
    ReportsPage
  ]
})
export class ReportsPageModule {}
