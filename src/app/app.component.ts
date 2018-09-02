import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';
import { AuthService } from '../providers/authService';
import { DataService } from '../providers/dataService';
import { UserProfile } from './models/userProfile';
// import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  profile: any;
  rootPage:string;

  constructor(platform: Platform, private authService: AuthService,
    statusBar: StatusBar, private dataService: DataService, splashScreen: SplashScreen) {

    this.authService.getAuthenticatedUser().subscribe(user =>{
      if(!user){
        this.rootPage = 'LoginPage'
      }else{
        this.dataService.getUserProfile(user).subscribe((profile)=>{
          this.profile = profile;
        });
        this.rootPage = 'HomePage';
      } 
    })
    ///////////////////////////// 
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }

  logout(){
    this.authService.logout();
    this.nav.setRoot('LoginPage');
  }
}

