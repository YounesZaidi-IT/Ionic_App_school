import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
  	IonicStorageModule.forRoot(),
    IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {}
