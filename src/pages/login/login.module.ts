import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
  	IonicStorageModule.forRoot(),
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
 