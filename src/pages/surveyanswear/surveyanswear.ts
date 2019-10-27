import { Injectable,Component,ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage,NavController,NavParams,App,ToastController,Slides } from 'ionic-angular'; //Slides
import { HttpClient } from '@angular/common/http';
//import { HomePage } from '../home/home';

@IonicPage()  

@Component({
  selector: 'page-surveyanswear',
  templateUrl: 'surveyanswear.html',
})
@Injectable()
export class SurveyanswearPage { 
    slides:any;
	token_login:any;
	arrName= {};
	allarray = [];
    keys:any;
	@ViewChild('slider') slider: Slides;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public storage: Storage,public toastCtrl: ToastController,public app: App) {
	  
	  
	  	this.storage.get('login').then((token)=>{
		 if(token){
		   console.log(token);
		   var data = {
			"Action" : "survey_question", 
			"id": token,
			"survey_id": this.navParams.get('id_nav')
		   }
		   this.token_login = token;
		  var url = 'http://172.104.166.224/ionic_younes/register.php';
		  this.http.post(url, JSON.stringify(data))
		  .subscribe((res: any) => {
			if(res){
				console.log(res.login);
			    this.slides = res.login;
			}
		  },(err) => {
			this.return_message('Error pleas contact IT Team !!');
		  });

		  
		 }else{
		  this.navCtrl.push('LoginPage'); 
		 }
	 });
	 
  }

   
   mcqAnswer(value,question){
    this.arrName[question] = value+":question:"+question;
	//this.keys = Object.["values"](this.arrName)
	this.keys = (<any>Object).values(this.arrName);

   }
   
   
   
   reponse_data(){
	    if(this.arrName){
		   var data = {
			"Action" : "save_survey", 
			"arr_data"    : this.keys,
			"id"     : this.token_login, 
		   }
		  var url = 'http://172.104.166.224/ionic_younes/register.php';
		  this.http.post(url, JSON.stringify(data))
		  .subscribe((res: any) => {
			if(res){
				this.return_message(res.data);
				this.navCtrl.push('HomePage');
			}
		  },(err) => {
			this.return_message('Error pleas contact IT Team !!');
		  });
		}else{
		this.return_message('Error pleas contact IT Team !!');	
		}
   }
   
   
   currentIndex = 0;
   nextSlide(){
    this.slider.slideNext();
   }
   previousSlide(){
    this.slider.slidePrev(); 
   }
   onSlideChanged(){
    this.currentIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.currentIndex);
   }
   
   ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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