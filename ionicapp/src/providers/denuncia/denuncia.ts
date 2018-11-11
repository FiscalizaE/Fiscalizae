import { Injectable } from '@angular/core';
import { Denuncia } from '../../app/shared/denuncia';

/*
  Generated class for the DenunciaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DenunciaProvider {

  constructor() {
    console.log('Hello DenunciaProvider Provider');
  }

  public lista: Denuncia[] = [];

}
