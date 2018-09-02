import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  constructor(public navCtrl: NavController,private toastCtrl: ToastController,
     public navParams: NavParams) {
  }

  public profileSaveResponse(event){
     if(event){
        this.toastCtrl.create({
          message: 'Profile saved successfully..',
          duration: 3000
        }).present();
        this.navCtrl.setRoot("HomePage");
     }else{
       this.toastCtrl.create({
         message: 'Something went wrong, please try again..',
         duration: 3000
       }).present();
     }
  }

}
