import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { IonicModule } from 'ionic-angular';
import { UserProfileComponent } from './user-profile/user-profile';
import { RentPropertyComponent } from './rent-property/rent-property';
@NgModule({
	declarations: [LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    RentPropertyComponent],
	imports: [IonicModule],
	exports: [LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    RentPropertyComponent]
})
export class ComponentsModule {}
