import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cities } from '../../app/models/cities';
import { AuthService } from '../../providers/authService';
import { Subscription } from 'rxjs';
import { User } from 'firebase';
import { DataService } from '../../providers/dataService';
import { ToastController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfileComponent implements OnInit, OnDestroy{
  
  loader: any;
  cities: any[];
  profileForm: FormGroup;
  private authenticatedUser;
  private authenticatedUser$: Subscription;
  @Output() saveProfileRes: EventEmitter<any>;

  constructor(private authService: AuthService,private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, 
    private dataService: DataService) {
    this.cities = Cities;
    this.authenticatedUser$ = this.authService.getAuthenticatedUser().subscribe((user: User) => {
       this.authenticatedUser = user;
    });
    this.saveProfileRes = new EventEmitter<any>();
  }

  ngOnInit(){
    this.profileForm = new FormGroup({
       'email': new FormControl(this.authenticatedUser.email, [Validators.required]),      
       'name': new FormControl(null, [Validators.required]),
       'city': new FormControl(null, [Validators.required]),
       'phone': new FormControl(null, [Validators.required])
    });
  }
  
  async SaveProfile(){
    this.loader = this.loadingCtrl.create({
      content: 'please wait...',
      spinner: 'dots'
    });
    this.loader.present();

    console.log(this.profileForm);
    if(this.authenticatedUser){
      const result = await
      this.dataService.saveProfile(this.authenticatedUser, this.profileForm).then((response)=>{
        console.log(response);
        if(response){
         this.saveProfileRes.emit(response);
        } else{
         this.saveProfileRes.emit(response);
        }
      });
    }
    this.loader.dismiss();
  }

  ngOnDestroy(){
    this.authenticatedUser$.unsubscribe();
  }
}
