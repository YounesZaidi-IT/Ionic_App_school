import { Injectable,Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage,NavController,NavParams,App,ToastController} from 'ionic-angular'; //Slides
import { HttpClient } from '@angular/common/http';
//import { HomePage } from '../home/home';

@IonicPage()  

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
@Injectable()
export class ActivitiesPage { 
    datagame:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public storage: Storage,public toastCtrl: ToastController,public app: App) {

	  
	  	this.storage.get('login').then((token)=>{
		 if(token){
		   console.log(token);
		   var data = {
			"Action" : "get_activiter", 
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
	 
	 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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