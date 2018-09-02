import { Component } from '@angular/core';

/**
 * Generated class for the RentPropertyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rent-property',
  templateUrl: 'rent-property.html'
})
export class RentPropertyComponent {

  text: string;

  constructor() {
    console.log('Hello RentPropertyComponent Component');
    this.text = 'Hello World';
  }

}
