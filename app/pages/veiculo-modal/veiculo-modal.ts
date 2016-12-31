import { Component } from '@angular/core';
import { NavController , Alert, Modal, ViewController } from 'ionic-angular';
import { SrRefuellPage} from '../sr-refuell/sr-refuell';

/*
  Generated class for the VeiculoModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/veiculo-modal/veiculo-modal.html',
})
export class VeiculoModalPage {


  constructor(private nav: NavController, private view: ViewController) {}

  close() {
    this.view.dismiss();
  }

  openRefuel() {
    let modal = Modal.create(SrRefuellPage);
    modal.onDismiss(() => {
      console.log('passei aqui no modal');
      });
    this.nav.present(modal);
  }

  Relatorios() {
    let texto = ('Apresenta os dados historicos de abastecimentos e todos as outras intervenções no veiculo')
    let alert = Alert.create({
      message: texto
    });
    this.nav.present(alert);
  }

  Estatisticas() {
    let texto = ('Apresenta tela dos indicadores comparativos com as especificaçoes de fábrica')
    let alert = Alert.create({
      message: texto
    });
    this.nav.present(alert);
  }

  Ordemservico() {
    let texto = ('Abre tela para registrar o que foi reparado no carro. O app processa os alertas e volta para a tela: O QUE TENHO PARA HOJE.')
    let alert = Alert.create({
      message: texto
    });
    this.nav.present(alert);
  }

  Vouviajar() {
    let texto = ('Abre tela onde o usuário coloca a duração total ou a km total de sua viajem. O app calcula e verifica os itens que vão vencer. Abre página para O QUE TENHO PARA A VIAGEM')
    let alert = Alert.create({
      message: texto
    });
    this.nav.present(alert);
  }
}
