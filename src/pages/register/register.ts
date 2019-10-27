import { Injectable,Component,ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,IonicPage, NavParams} from 'ionic-angular';
import { App,ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { HomePage } from '../home/home';


@IonicPage() 

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
@Injectable()
export class RegisterPage { 

  @ViewChild('name') name;
  @ViewChild('lastname') lastname;
  @ViewChild('username') username;
  @ViewChild('phone') phone;
  @ViewChild('login') login;
  @ViewChild('password') password;
  @ViewChild('email') email; 
  @ViewChild('Referencedeenfant') Referencedeenfant;
  @ViewChild('radioValue') radioValue;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public storage: Storage,public toastCtrl: ToastController,public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
   register(){	
   


		var data = {
			"Action" : "register_data", 
			"name": this.name.value,
			"lastname": this.lastname.value,
			"username": this.username.value,
			"phone": this.phone.value,
			"login": this.login.value,
			"password": this.password.value,
			"email": this.email.value,
			"Referencedeenfant" : this.Referencedeenfant.value,
			"type_parent": this.radioValue
			
		} 

		var url = 'http://172.104.166.224/ionic_younes/register.php';
		
		if(this.name.value && this.lastname.value && this.username.value && this.phone.value && this.phone.value && this.login.value && this.password.value && this.email.value && this.Referencedeenfant.value && this.radioValue){
			
			console.log(data);
			
		  this.http.post(url, JSON.stringify(data))
		  .subscribe(res => {
			  this.return_message(res['data']);
			if(res['status'] != 'danger'){
			  this.storage.set('login', res['login']);	
			  this.navCtrl.push('LoginPage');
			}
		  },(err) => {
			this.return_message('Error pleas contact IT Team !!');
		  });
		  
		 
		}else{
			this.return_message('add all data please !!');
		}
	
   }
   
   loginapp(){
	  this.navCtrl.push('LoginPage');  
   }
   
    return_message(mesg){
	   const toast = this.toastCtrl.create({
		  message: mesg,
		  duration: 3000
		});
		toast.present();
   }

  

}