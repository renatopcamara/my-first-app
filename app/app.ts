import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ConncetionServices} from './providers/conncetion-services/conncetion-services';

import {HomePage} from './pages/home/home';
import {MenuTestePage} from './pages/menu-teste/menu-teste';
import {GeneratedTestPage} from './pages/generated-test/generated-test';
import {HojeTenhoHomePage} from './pages/hoje-tenho-home/hoje-tenho-home';
import {CartoesTestPage} from './pages/cartoes-test/cartoes-test';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

    pages:  Array<{component: any, title: string, icon: string}>;
    rootPage: any = HojeTenhoHomePage;

  constructor(platform: Platform, private MenuCtrl: MenuController) {

  this.pages = [
    {component: HomePage, title:  'Home', icon: 'home'},
    {component: GeneratedTestPage, title:  'Buscar Endereço', icon: 'alert'},
    {component: HojeTenhoHomePage, title:  'Hoje Tenho', icon: 'alarm'},
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
