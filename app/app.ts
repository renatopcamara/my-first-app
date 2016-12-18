import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ConncetionServices} from './providers/conncetion-services/conncetion-services';

import {HomePage} from './pages/home/home';
import {MenuTestePage} from './pages/menu-teste/menu-teste';
import {GeneratedTestPage} from './pages/generated-test/generated-test';
import {AlertaPage} from './pages/alerta/alerta';
import {CartoesTestPage} from './pages/cartoes-test/cartoes-test';
import {BotoesTestPage} from './pages/botoes-test/botoes-test';
import {IconesTestPage} from './pages/icones-test/icones-test';
import {EntradasTestPage} from './pages/entradas-test/entradas-test';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

    pages:  Array<{component: any, title: string, icon: string}>;
    rootPage: any = HomePage;

  constructor(platform: Platform, private MenuCtrl: MenuController) {

  this.pages = [
    {component: HomePage, title:  'Home', icon: 'home'},
    {component: MenuTestePage, title:  'Menu Teste', icon: 'albums'},
    {component: GeneratedTestPage, title:  'Pagina Gerada', icon: 'alert'},
    {component: AlertaPage, title:  'Alerta', icon: 'alarm'},
    {component: CartoesTestPage, title:  'Cartoes', icon: 'clock'},
    {component: BotoesTestPage, title:  'Botoes', icon: 'favorite'},
    {component: IconesTestPage, title:  'Icones', icon: 'star'},
    {component: EntradasTestPage, title:  'Entradas', icon: 'apps'}
  ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page:  any, menuside:  string) : void {
    this.rootPage = page.component;
    this.MenuCtrl.close(menuside);
  }

MenuOpened():void{
  console.log('Abriu o menu');

}

}

ionicBootstrap(MyApp, [ConncetionServices], {
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }});
