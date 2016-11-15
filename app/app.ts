import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HomePage} from './pages/home/home';
import {MenuTestePage} from './pages/menu-teste/menu-teste';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

    pages:  Array<{component: any, title: string, icon: string}>;
    rootPage: any = HomePage;

  constructor(platform: Platform, private MenuCtrl: MenuController) {

  this.pages = [
    {component: HomePage, title:  'Home', icon: 'home'},
    {component: MenuTestePage, title:  'Menu Teste', icon: 'menu'}
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
  console.log('Abriu');

}

}

ionicBootstrap(MyApp, [], {
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }});
