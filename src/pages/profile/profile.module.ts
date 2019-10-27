import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { IonicStorageModule } from '@ionic/storage'; 

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
  	IonicStorageModule.forRoot(),
    IonicPageModule.forChild(ProfilePage),
  ],  
    exports: [
    ProfilePage
  ]
})
export class ProfilePageModule {}
