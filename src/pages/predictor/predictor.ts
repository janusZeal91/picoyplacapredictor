import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { IValidator } from '../../validators/IValidator';
import { DriverDataValidator } from '../../validators/DriverDataValidator';
import { DriverData } from '../../model/DriverData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * @author José Luis Escobar Cárdenas
 * @version 0.9
 * @summary Controller class por Predictor Page
 */ 

const DRIVER_ALLOWED_MSG = "Usted es libre de circular por la ciudad en las fechas y horas especificadas";
const DRIVER_NOT_ALLOWED_MSG = "Usted NO PUEDE circular por la ciudad en las fechas y horas especificadas. Evite multas";
const RESULT_ALLOWED_TITLE = "¡CIRCULACIÓN LIBRE!";
const RESULT_NOT_ALLOWED_TITLE = "¡CIRCULACIÓN RESTRINGIDA!";

@IonicPage()
@Component({
  selector: 'page-predictor',
  templateUrl: 'predictor.html',
})
export class PredictorPage {

  predictorForm: FormGroup;
  licensePlate: string;
  driverAge: number;
  dateTimeDrive: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private alertController: AlertController) {
    this.initializeFormValidators();
  }

  initializeFormValidators() {
    this.predictorForm = this.formBuilder.group({
      licensePlate: ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]{2,3}-[0-9]{4}')])],
      driverAge: ['', [Validators.required]],
      dateTimeDrive: ['', [Validators.required]]
    });
  }

  public checkAvailabilty() {
    let dateDrive: Date = new Date(this.dateTimeDrive);
    //Fix TimeZone Offset
    dateDrive.setHours(dateDrive.getHours() + (dateDrive.getTimezoneOffset()/60));
    let driverData = new DriverData(this.licensePlate, this.driverAge,dateDrive);
    let picoYPlacaValidator: IValidator<DriverData> = new DriverDataValidator();
    if (picoYPlacaValidator.validate(driverData)) {
      this.showBasicAlert(DRIVER_ALLOWED_MSG, RESULT_ALLOWED_TITLE);
    } else {
      this.showBasicAlert(DRIVER_NOT_ALLOWED_MSG, RESULT_NOT_ALLOWED_TITLE);
    }
  }

  showBasicAlert(message: string, title: string) {
    let alert = this.alertController.create({
      title: title,
      message: message,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  toUpperCaseLicencesPlate(licencePlate: string) {
    this.licensePlate = licencePlate.toUpperCase();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PredictorPage');
  }

}
