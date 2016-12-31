import { Component } from '@angular/core';
import { NavController, ViewController,Alert } from 'ionic-angular';

/*
  Generated class for the SrRefuellPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sr-refuell/sr-refuell.html',
})
export class SrRefuellPage {
  constructor(private nav: NavController, private view: ViewController) {}

  close() {
    this.view.dismiss();
  }

  Estatistica() {
    let texto = ('Voce está indo muito bem')
    let alert = Alert.create({
      title: 'Aviso',
      message: texto
    });
    this.nav.present(alert);
  }
}
