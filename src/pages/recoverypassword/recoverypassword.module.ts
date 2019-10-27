import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverypasswordPage } from './recoverypassword';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    RecoverypasswordPage,
  ],
  imports: [
  	IonicStorageModule.forRoot(),
    IonicPageModule.forChild(RecoverypasswordPage),
  ],
})
export class RecoverypasswordPageModule {}
