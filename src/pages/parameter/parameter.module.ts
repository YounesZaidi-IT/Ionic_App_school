import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParameterPage } from './parameter';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    ParameterPage,
  ],
  imports: [
  	IonicStorageModule.forRoot(),
    IonicPageModule.forChild(ParameterPage),
  ],
})
export class ParameterPageModule {}
