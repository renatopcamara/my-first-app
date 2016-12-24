import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';
import { ConncetionServices } from './../../providers/conncetion-services/conncetion-services';

@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html',
})
export class GeneratedTestPage {

  user: string='none';
  cepDesejado: string;

  constructor(private nav: NavController, private connectionService: ConncetionServices) {}

  buscarCep() : void{
    this.connectionService.getCep(this.cepDesejado)
      .then((res) => {
        let json = res.json();
        console.log(json);
        console.log(json.logradouro);
        console.log(json.localidade);

        let texto = ('Cep: ' + this.cepDesejado + ' Logradouro: ' + json.logradouro + ' Localidade: ' + json.localidade)
        let alert = Alert.create({
          message: texto
        });
        this.nav.present(alert);

      }).catch((err) => {
        console.log(err);
      })
  }


  InputCEP() {
    let alert = Alert.create({
      title:'Entrada de Dados',
      message: 'Digite o CEP que deseja o endereço',
      inputs: [
        {
          name: 'CEP',
          placeholder:  '0000000'
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
