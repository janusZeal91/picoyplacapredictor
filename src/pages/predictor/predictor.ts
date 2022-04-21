import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * @author José Luis Escobar Cárdenas
 * @version 0.9
 */

@IonicPage()
@Component({
  selector: 'page-predictor',
  templateUrl: 'predictor.html',
})
export class PredictorPage {

  licensePlate:string;
  driverAge:number;
  dateTimeDrive:Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  public checkAvailabilty(){
    let driverData = new DriverData(this.licensePlate, this.driverAge, this.dateTimeDrive);
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PredictorPage');
  }

}
