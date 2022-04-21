import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredictorPage } from './predictor';

@NgModule({
  declarations: [
    PredictorPage,
  ],
  imports: [
    IonicPageModule.forChild(PredictorPage),
  ],
})
export class PredictorPageModule {}
