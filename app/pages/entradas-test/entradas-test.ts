import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/entradas-test/entradas-test.html',
})
export class EntradasTestPage {

  login: string;
  senha: string;

  constructor(private nav: NavController) {}


  entrar() {
    let texto = ('Login: ' + this.login + ', Senha: ' + this.senha)
    let alert = Alert.create({
      title: 'Entrando...',
      message: texto
    });
    this.nav.present(alert);
  }

}
