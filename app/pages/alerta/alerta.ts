import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

/*
  Generated class for the AlertaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/alerta/alerta.html',
})
export class AlertaPage {

  user: string='none';
  constructor(public nav: NavController) {}


public showAlert() {
  let alert = Alert.create({
    title:'Alert de teste',
    message: 'Digite seu nome',
    inputs: [
      {
        name: 'nome',
        placeholder:  'Seu nome'
      }
    ],
    buttons: [
      {
        text:'Cancelar'
      },
      {
        text: 'Ok',
        handler: (data) =>{
          this.user = data.nome;
        }

      }]
  });

  this.nav.present(alert);
}

}
