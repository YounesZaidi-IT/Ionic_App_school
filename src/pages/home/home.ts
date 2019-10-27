import { Injectable,Component,ViewChild } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {
	 login_name:any;
	 refer:any;
	 bg:any;
	 @ViewChild('showdiv') showdiv;
  constructor(public navCtrl: NavController,public storage: Storage) {
    //this.storage.remove('login')
	this.storage.get('login').then((token)=>{

			setTimeout( () => {
				console.log(token);
				if(token){
				this.login_name = token; 
				}else{
				 this.navCtrl.push('LoginPage'); 
				}
				} , 400 );
	 });
	 
	this.storage.get('reference').then((ref)=>{
		 if(ref)
		 this.refer = ref; 
	 });

    this.storage.get('bg_color').then((colr)=>{
		 if(colr)
		 this.bg =  colr;
		 else
		 this.bg =  'ion-cardd1';
	});	 
  }
 
 check(check){
	 if(check)
		 this.bg = 'ion-cardd2';
	 else
		 this.bg = 'ion-cardd1';
	 
    this.storage.get('bg_color').then((colr)=>{
		 if(colr == 'ion-cardd2')
		 this.bg =  'ion-cardd1';
	     else
		 this.bg =  'ion-cardd2';

	     this.storage.set('bg_color',this.bg);
	     this.showdiv.nativeElement.className = this.bg; 
	});	
 }
  
  
  Logout(){
	  console.log('Logout');
	  this.storage.remove('login');
	  //this.navCtrl.push('LoginPage');
	  this.navCtrl.setRoot(this.navCtrl.getActive().component);
  } 
  
  parameter(){
	  this.navCtrl.push('ParameterPage');  //, {istorage: this.id}
  }
  
  activities(){
	  this.navCtrl.push('ActivitiesPage');
  }
  
  survey(){
	  this.navCtrl.push('SurveyPage');
  }
  
  profil(){
	  this.navCtrl.push('ProfilePage');
  }
  
  reports(){
	  this.navCtrl.push('ReportsPage');
  }
  
  ionViewDidLoad() {
     console.log('ionViewDidLoad');
  }
  
  

}

//this.storage.remove('login')