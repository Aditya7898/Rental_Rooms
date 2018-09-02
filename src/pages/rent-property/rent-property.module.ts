import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentPropertyPage } from './rent-property';

@NgModule({
  declarations: [
    RentPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(RentPropertyPage),
  ],
})
export class RentPropertyPageModule {}
