import { Injectable,Component,ViewChild} from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,IonicPage, NavParams} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { HomePage } from '../home/home';

@IonicPage() 

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
@Injectable()
export class LoginPage { 

  @ViewChild('username') uname;
  @ViewChild('password') password;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public storage: Storage,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
   signIn(){	   
		var data = {
			"email": this.uname.value,
			"password": this.password.value 
		}
		var url = 'http://172.104.166.224/ionic_younes/login.php';
		
		if(this.uname.value && this.password.value){
		  this.http.post(url, JSON.stringify(data))
		  .subscribe(res => {
			  this.return_message(res['data']);
			if(res['status'] != 'danger'){
			  this.storage.set('login', res['login']);
				this.storage.set('reference', res['reference']);				  
				
					 setTimeout( () => {
						this.navCtrl.push('HomePage');
						} , 400 );
			}
		  },(err) => {
			this.return_message('Error pleas contact IT Team !!');
		  });
		}else{
			this.return_message('add email && password please !!');
		}
   }
   
    return_message(mesg){
	   const toast = this.toastCtrl.create({
		  message: mesg,
		  duration: 3000
		});
		toast.present();
   }
   
   register(){
	  this.navCtrl.push('RegisterPage'); 
   }
   ForgotPassword(){
      this.navCtrl.push('RecoverypasswordPage'); 
   }

  

}