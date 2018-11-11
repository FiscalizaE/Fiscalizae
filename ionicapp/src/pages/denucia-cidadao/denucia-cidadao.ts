import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Denuncia } from '../../app/shared/denuncia';
import { DenunciaProvider } from '../../providers/denuncia/denuncia';

/**
 * Generated class for the DenuciaCidadaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-denucia-cidadao',
  templateUrl: 'denucia-cidadao.html',
})
export class DenuciaCidadaoPage {



  private dadosDoForm: Denuncia = new Denuncia;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public denunciaApi: DenunciaProvider) {
    this.dadosDoForm.tipo = '';

  }

  ionViewDidLoad() {
  }

  readFile($event: any) {

    if ($event.target.files && $event.target.files[0]) {
      var FR = new FileReader();
      let img: HTMLImageElement = document.getElementById("img") as HTMLImageElement;
      FR.addEventListener("load", (e: any) => {
        img.src = e.target.result;
        this.dadosDoForm.foto = e.target.result;
      });
      FR.readAsDataURL($event.target.files[0]);
    }
    // var image: any = new Image();
    // var file: File = $event.target.files[0];
    // var myReader: FileReader = new FileReader();
    // myReader.onloadend = (loadEvent: any) => {
    //   var imageTemp: HTMLImageElement = new Image();
    //   imageTemp.src = loadEvent.target.result;
    //   imageTemp.onload = () => {
    //     if (!this.keepAspect) {
    //       this.cropperSettings.width = imageTemp.width;
    //       this.cropperSettings.height = imageTemp.height;
    //       this.cropper.cropper = new ImageCropper(this.cropperSettings);
    //       this.cropper.cropper.prepare(this.cropper.cropcanvas.nativeElement);
    //     }
    //     image.src = loadEvent.target.result;
    //     this.cropper.setImage(image);
    //   }
    // };
    // myReader.readAsDataURL(file);


    // if (this.files && this.files[0]) {

    //   var FR = new FileReader();

    //   FR.addEventListener("load", function (e) {
    //     document.getElementById("img").src = e.target.result;
    //     document.getElementById("b64").innerHTML = e.target.result;
    //   });

    //   FR.readAsDataURL(this.files[0]);
    // }

  }

  salvar() {

    this.denunciaApi.lista.push(this.dadosDoForm);
    this.dadosDoForm = new Denuncia;
    this.dadosDoForm.tipo = '';
    console.log(this.denunciaApi.lista);

  }

}
