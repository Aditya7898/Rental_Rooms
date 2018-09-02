import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginResponse } from '../../app/models/login-response';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  
  register(event: LoginResponse){
    console.log(event);
   if(!event.error){
    this.alertCtrl.create({
      title: 'Congratulations',
      message: 'You are registerd successfully..',
      buttons: ['ok']
    }).present();
    this.navCtrl.setRoot('UserProfilePage');
   } else {
    this.alertCtrl.create({
      title: 'Account not created',
      message: event.error.message,
      buttons: ['ok']
    }).present();
   }
  }

}
