import { Component } from '@angular/core';

import { PredictorPage } from '../predictor/predictor';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PredictorPage;
  constructor() {

  }
}
