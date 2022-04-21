import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IValidator } from '../../validators/IValidator';
import { PicoYPlacaValidator } from '../../validators/PicoYPlacaValidator';
import { DriverData} from '../../model/DriverData';

/**
 * @author José Luis Escobar Cárdenas
 * @version 0.9
 * @summary Controller class por Predictor Page
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
    let picoYPlacaValidator: IValidator<DriverData> = new PicoYPlacaValidator();
    if(picoYPlacaValidator.validate(driverData)){
      //T
    }else{
      
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PredictorPage');
  }

}
