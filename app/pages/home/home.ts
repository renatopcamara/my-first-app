import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {GeneratedTestPage} from '../generated-test/generated-test';
import {MenuTestePage} from '../menu-teste/menu-teste';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  pushPage() : void{
    this.navCtrl.push(GeneratedTestPage)  ;
  }

}
