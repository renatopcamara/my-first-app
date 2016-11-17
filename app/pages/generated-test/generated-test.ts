import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConncetionServices } from './../../providers/conncetion-services/conncetion-services';

@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html',
})
export class GeneratedTestPage {
  constructor(private nav: NavController, private connectionService: ConncetionServices) {}

  buscarCep() : void{
    this.connectionService.getCep('20520051')
      .then((res) => {
        let json = res.json();
        console.log(json.localidade);
      }).catch((err) => {
        console.log(err);
      })
  }
}
