import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DenuciaCidadaoPage } from '../denucia-cidadao/denucia-cidadao';
import { HomeCidadaoPage } from '../home-cidadao/home-cidadao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {
    this.tab1 = DenuciaCidadaoPage;
    this.tab2 = HomeCidadaoPage;
  }


}
