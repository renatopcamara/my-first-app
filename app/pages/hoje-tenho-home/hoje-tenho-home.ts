import { Component } from '@angular/core';
import { NavController, Modal, Alert } from 'ionic-angular';
import { VeiculoModalPage} from  '../veiculo-modal/veiculo-modal';

/*
  Generated class for the HojeTenhoHomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/hoje-tenho-home/hoje-tenho-home.html',
})
export class HojeTenhoHomePage {

  item: any;

  constructor(private nav: NavController) {

  }


  openVeiculo() {
    let modal = Modal.create(VeiculoModalPage);

    modal.onDismiss(() => {
      console.log('passei aqui no modal');
      });

    this.nav.present(modal);
  }

  addCar() {
    let texto = (' Abre tela para adicionar novo veiculo')
    let alert = Alert.create({
      message: texto
    });
    this.nav.present(alert);
  }

}
