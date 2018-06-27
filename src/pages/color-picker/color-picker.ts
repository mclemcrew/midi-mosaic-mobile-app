import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ColorPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-color-picker',
  templateUrl: 'color-picker.html',
})
export class ColorPickerPage {

  dataSent = 'null';
  dataReceived;

  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  write() {
    this.bluetoothSerial.write('hello world').then(()=> {this.dataSent='yes'},()=> {this.dataSent='no'});
  }

  read() {
    this.dataReceived = this.bluetoothSerial.read().then((data)=> {this.dataSent=data},()=> {this.dataSent='no'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorPickerPage');
  }

  disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }

}
