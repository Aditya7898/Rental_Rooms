import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../providers/authService';
import { LoginResponse } from '../../app/models/login-response';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {
  loader: any;
  account = {} as Account;
  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private authService: AuthService, private loadingCtrl: LoadingController) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register(){
    this.loader = this.loadingCtrl.create({
      content: 'please wait',
      spinner: 'bubbles'
    });
    this.loader.present();
    try{
      const result = await this.authService.register(this.account);
      this.registerStatus.emit(result);
    } catch(error){
      this.registerStatus.emit(error);
    }
    this.loader.dismiss();
  }

}
