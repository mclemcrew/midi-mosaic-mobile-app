import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
/**
 * Generated class for the ColorPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-color-picker',
  templateUrl: 'color-picker.html',
})
export class ColorPickerPage {

  labelForNumberInput: string = "Box Number: "
  controlOfLEDs: any = 'b';
  colorCombo: string;
  color: any = "255,0,0";
  redValue: any = "255";
  greenValue: any = "95";
  blueValue: any = "0";
  dataSent: any;

  constructor(private bluetoothSerial: BluetoothSerial,private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    //this.comboColor = this.redValue+","+this.greenValue+","+this.blueValue;
    this.colorCombo = "rgb("+this.redValue+","+this.greenValue+"," + this.blueValue+")";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorPickerPage');
  }

  colorChanged() {
    this.colorCombo = "rgb("+this.redValue+","+this.greenValue+"," + this.blueValue+")";
  }

  write() {
    this.bluetoothSerial.write('hello world').then(()=> {this.dataSent='yes'},()=> {this.dataSent='no'});
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (true) {
              // logged in!
              console.log(true);
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

}
