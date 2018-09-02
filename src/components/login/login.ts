import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../providers/authService';
import { LoginResponse } from '../../app/models/login-response';
import { LoadingController, NavController } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  loader: any;
  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private authService: AuthService, private loadingCtrl: LoadingController,private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }
  
  async login(){
    this.loader = this.loadingCtrl.create({
      content: 'please wait',
      spinner: 'bubbles'
    });
    this.loader.present();

    const LoginResponse = await this.authService.login(this.account);
    console.log(LoginResponse);
    this.loginStatus.emit(LoginResponse);
    this.loader.dismiss();
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }
}
