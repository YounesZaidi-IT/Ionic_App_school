import { Injectable,Component} from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage,NavController,NavParams,App,ToastController,AlertController } from 'ionic-angular'; //Slides
import { HttpClient } from '@angular/common/http';
//import { HomePage } from '../home/home';

@IonicPage()  

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
@Injectable()
export class ProfilePage { 
    childe_name:any;
	date_n:any;
	school:any;
	fisrt_inscr:any;
	title_v:any;
	rapport_diagnostic:any;
	rapport_etablissement:any;
	cont:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public storage: Storage,public toastCtrl: ToastController,public app: App,private alertCtrl: AlertController) {
	  
	  	this.storage.get('login').then((token)=>{
		 if(token){
		   console.log(token);
		   var data = {
			"Action" : "Profile_childe", 
			"id": token
		   }
		  var url = 'http://172.104.166.224/ionic_younes/register.php';
		  this.http.post(url, JSON.stringify(data))
		  .subscribe((res: any) => {
			if(res){
				console.log(res.login[0].nom);  
				this.childe_name           = res.login[0].nom;
				this.date_n                = res.login[0].date_naissance;
				this.school                = res.login[0].school;
				this.fisrt_inscr           = res.login[0].date_inscription_etablissement;		
				this.rapport_diagnostic    = res.login[0].rapport_diagnostic;
				this.rapport_etablissement = res.login[0].rapport_etablissement;				
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
    console.log('ionViewDidLoad ProfilePage');
  }
  
   home(){
	   this.navCtrl.push('HomePage');
   }
   
   report(id){
	     if(id == 'school'){
			this.title_v =  'Report school';
			this.cont    =   this.rapport_etablissement;
		 }else{
			this.title_v = 'Report Diagnostic';
			this.cont    =   this.rapport_diagnostic;			
		 }
	   
	   let alert = this.alertCtrl.create({
		   title: this.title_v,
		   message: '<p class="messagecss">'+this.cont+'</p>',
		   buttons: [{
			   text: 'close',
			   role: 'cancel',
			   handler: data => {
				   console.log('Cancel clicked');
			   }
			}
			]
		});
		alert.present();
	}
   
    return_message(mesg){
	   const toast = this.toastCtrl.create({
		  message: mesg,
		  duration: 3000
		});
		toast.present();
   }

  

}