import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenuciaCidadaoPage');
  }

  readFile($event: any) {


    if ($event.target.files && $event.target.files[0]) {

      var FR = new FileReader();

      let img: HTMLImageElement = document.getElementById("img") as HTMLImageElement;

      FR.addEventListener("load", function (e: any) {
        img.src = e.target.result;
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

}
