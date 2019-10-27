import { Injectable,Component,ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,IonicPage, NavParams} from 'ionic-angular';
import { App,ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage() 
@Component({
  selector: 'page-parameter',
  templateUrl: 'parameter.html',
})
@Injectable()
export class ParameterPage { 

  nameval:any;
  lastnameval:any;
  emailval:any;
  phoneval:any;
  loginval:any;
  passwordval:any;
  Referencedeenfantval:any;
  radioValue:any;
  public login: any; 
  
  
  
  @ViewChild('name') name;
  @ViewChild('lastname') lastname;
  @ViewChild('username') username;
  @ViewChild('phone') phone;
  @ViewChild('login1') login1;
  @ViewChild('password') password;
  @ViewChild('email') email; 
  @ViewChild('Referencedeenfant') Referencedeenfant;
  //@ViewChild('radioValue') radioValue;


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public storage: Storage,public toastCtrl: ToastController,public app: App) {
	
	  	this.storage.get('login').then((token)=>{
		 if(token){
		   console.log(token);
		   var data = {
			"Action" : "get_data", 
			"id": token
		   }
		  var url = 'http://172.104.166.224/ionic_younes/register.php';
		  this.http.post(url, JSON.stringify(data))
		  .subscribe((res: any) => {
			if(res){
			  this.nameval = res.login[0].nom;
			  this.lastnameval = res.login[0].prenom;
			  this.emailval = res.login[0].email; 
			  this.phoneval = res.login[0].telephone;
			  this.loginval = res.login[0].login;
			  this.passwordval = res.login[0].password;
			  this.Referencedeenfantval = res.login[0].reference;
			  this.radioValue  = res.login[0].type;
			}
		  },(err) => {
			this.return_message('Error pleas contact IT Team !!');
		  });

		  
		 }else{
		  this.navCtrl.push('LoginPage'); 
		 }
	 });
	 
	 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParameterPage1');
  }
  
   parameter(){	
		var data = {
			"Action" : "update_data", 
			"name": this.name.value,
			"lastname": this.lastname.value,
			"username": this.username.value,
			"phone": this.phone.value,
			"login": this.login1.value,
			"password": this.password.value,
			"email": this.email.value,
			"Referencedeenfant" : this.Referencedeenfant.value,
			"type_parent": this.radioValue
		} 
		
		var url = 'http://172.104.166.224/ionic_younes/register.php';
		
		if(this.name.value && this.lastname.value && this.username.value && this.phone.value && this.phone.value && this.login1.value && this.password.value && this.email.value && this.Referencedeenfant.value && this.radioValue){
		  this.http.post(url, JSON.stringify(data))
		  .subscribe(res => {
			  this.return_message(res['data']);
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
   
   home(){
	   this.navCtrl.push('HomePage');    
   }
    return_message(mesg){
	   const toast = this.toastCtrl.create({
		  message: mesg,
		  duration: 3000
		});
		toast.present();
   }

  

}