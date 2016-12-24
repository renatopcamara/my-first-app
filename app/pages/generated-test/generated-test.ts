import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { ConncetionServices } from './../../providers/conncetion-services/conncetion-services';

@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html',
})
export class GeneratedTestPage
  {

  user: string='none';
  cepDesejado: string;

  constructor(private nav: NavController, private connectionService: ConncetionServices) {}

  buscarCep() : void
    {
    this.connectionService.getCep('20520051').then((res) =>
        {
        let json = res.json();
        console.log(json.logradouro);
        console.log(json.localidade);
        }).catch((err) =>
        {
        console.log(err);
        });
    }
  }
