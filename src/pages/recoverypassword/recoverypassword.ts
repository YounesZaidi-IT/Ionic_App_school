import { Injectable,Component,ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,IonicPage, NavParams} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { HomePage } from '../home/home';

@IonicPage() 

@Component({
  selector: 'page-recoverypassword',
  templateUrl: 'recoverypassword.html',
})
@Injectable()


export class RecoverypasswordPage { 

  className: string = 'show';
  @ViewChild('code') code;
  @ViewChild('newpass') newpass;
  @ViewChild('email') email; 
  @ViewChild('showdiv') showdiv;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public storage: Storage,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad recoverypasswordPage');
  }
  
   recoverypassword(){	
       if(this.code.value && this.newpass.value && this.email.value){
		var data = {
			"email":   this.email.value,
			"newpass": this.newpass.value,
			"code":    this.code.value,
			"send_code": "recoverypassword"
		} 
		var url = 'http://172.104.166.224/ionic_younes/password.php';
		  this.http.post(url, JSON.stringify(data))
		  .subscribe(res => {
			  this.return_message(res['message'],3000);
			  if(res['statut'] != 'danger'){
			  this.navCtrl.push('LoginPage');
			  }			  
		  },(err) => {
			this.return_message('Error please contact IT Team !!',3000);
		  });
	   }else{
		  this.return_message('Add All Data Please !!',3000);   
	   }
   }
   
   Login(){
	  this.navCtrl.push('LoginPage');  
   }
   
   VerificationCode(){

	   if(this.email.value){
		var data = {
			"email": this.email.value,
			"send_code" : "send_code"
		} 
		this.return_message('this process will take some time !!',4500);
		var url = 'http://172.104.166.224/ionic_younes/password.php';
		  this.http.post(url, JSON.stringify(data))
		  .subscribe(res => {
			  this.return_message(res['message'],3000);
			  if(res['statut'] != 'danger'){
	            //this.return_message('Check Your Email Please !!');
	            this.showdiv.nativeElement.className = 'show';
			  }
		  },(err) => {
			this.return_message('Error please contact IT Team !!',3000);
			this.showdiv.nativeElement.className = 'hide';
		  });
	   }else{
		 this.return_message('Add Email Please !!',3000); 
		 this.showdiv.nativeElement.className = 'hide';
	   }
   }
    return_message(mesg,time){
	   const toast = this.toastCtrl.create({
		  message: mesg,
		  duration: time
		});
		toast.present();
   }

  

}