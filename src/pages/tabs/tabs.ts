import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { PredictorPage } from '../predictor/predictor';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PredictorPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
