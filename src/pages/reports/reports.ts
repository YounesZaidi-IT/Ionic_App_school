import { Injectable,Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage,NavController,NavParams,App,ToastController  } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { HomePage } from '../home/home';

@IonicPage()  

@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
@Injectable()
export class ReportsPage { 
    datagame:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public storage: Storage,public toastCtrl: ToastController,public app: App) {
	  
	  	this.storage.get('login').then((token)=>{
		 if(token){
		   console.log(token);
		   var data = {
			"Action" : "reports", 
			"id": token
		   }
		  var url = 'http://172.104.166.224/ionic_younes/register.php';
		  this.http.post(url, JSON.stringify(data))
		  .subscribe((res: any) => {
			if(res){
				console.log(res.login);
			    this.datagame = res.login;
			}
		  },(err) => {
			this.return_message('Error pleas contact IT Team !!');
		  });

		  
		 }else{
		  this.navCtrl.push('LoginPage'); 
		 }
	 });
	 
  }
  
  
  open_survey(id){
	  this.navCtrl.push('SurveyanswearPage', {id_nav: id});
	  console.log(id);
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  home(){
	 this.navCtrl.push('HomePage');   
  }
  remove_answer(id){
	  
		   var data = {
			"Action" : "remove_reports", 
			"id": id
		   }
		  var url = 'http://172.104.166.224/ionic_younes/register.php';
		  this.http.post(url, JSON.stringify(data))
		  .subscribe((res: any) => {
			if(res){
				 //location.reload();
				 this.navCtrl.push('HomePage');  
			}
		  },(err) => {
			this.return_message('Error pleas contact IT Team !!');
		  });
  }
  return_message(mesg){
	   const toast = this.toastCtrl.create({
		  message: mesg,
		  duration: 3000
		});
		toast.present();
   }

  

}