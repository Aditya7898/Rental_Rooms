import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginResponse } from '../../app/models/login-response';
import { AuthService } from '../../providers/authService';
import { DataService } from '../../providers/dataService';
import { User } from 'firebase';
import { UserProfile } from '../../app/models/userProfile';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit, OnDestroy{

  constructor(public navCtrl: NavController,private authService: AuthService, private dataService: DataService,
    private alertCtrl: AlertController ,public navParams: NavParams) {
  }

   ngOnInit(){

  }

  async login(event: LoginResponse){
    console.log(event);
    if(!event.error){
      this.alertCtrl.create({
        title: 'Congratulations',
        message: 'You are logged successfully..',
        buttons: ['ok']
      }).present();

      this.authService.getAuthenticatedUser().subscribe((user: User) =>{
        console.log(user);
        this.dataService.getUserProfile(user).subscribe((profile) => {
          profile ? this.navCtrl.setRoot('HomePage'): this.navCtrl.setRoot('UserProfilePage');
          console.log(profile);
        });
      });

      
    }else{
      this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Something went wrong..',
        message: event.error.message,
        buttons: ['ok']
      }).present(); 
    }
  }

  ngOnDestroy(){

  }

}
