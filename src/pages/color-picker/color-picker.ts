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
  controlName: any = "Box";
  controlNumber: any;
  controlButtonName: any = "Click to change box #";

  constructor(private bluetoothSerial: BluetoothSerial,private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    //this.comboColor = this.redValue+","+this.greenValue+","+this.blueValue;
    this.colorCombo = "rgb("+this.redValue+","+this.greenValue+"," + this.blueValue+")";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorPickerPage');
  }

  selectionChanged(e) {
    switch(this.controlOfLEDs) {
      case 'b': this.controlName = "Box";
        this.controlButtonName = "Click to change box #";
        break;
      case 'r': this.controlName = "Row";
        this.controlButtonName = "Click to change row #";
        break;
      case 'c': this.controlName = "Column";
        this.controlButtonName = "Click to change column #";
        break;
      case 'a': this.controlName = "All";
        this.controlButtonName = "All";
        break;  
    }
  }

  colorChanged(e) {
    this.colorCombo = "rgb("+this.redValue+","+this.greenValue+"," + this.blueValue+")";
  }

  write() {
    this.bluetoothSerial.write(this.controlOfLEDs + ',' + this.controlNumber + ',' + this.redValue+","+this.greenValue+"," + this.blueValue).then(()=> {this.dataSent='yes'},()=> {this.dataSent='no'});
  }

  presentPrompt() {
    if(this.controlOfLEDs!='a') {
    let alert = this.alertCtrl.create({
      title: this.controlName,
      inputs: [
        {
          name: 'Number',
          placeholder: 'Number'
        },
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
            if((this.controlOfLEDs=='b'&&data.Number<=128&&data.Number>0)||(this.controlOfLEDs=='c'&&data.Number<=16&&data.Number>0)||(this.controlOfLEDs=='r'&&data.Number<=8&&data.Number>0))
            {
              this.controlButtonName = "";
              this.controlNumber = data.Number;
              this.controlButtonName = this.controlName + ' #' + data.Number;
            }
            else {
              this.presentErrorAlert("Error");
            }
          }
        }
      ]
    });
    alert.present();
  }
  }

  presentErrorAlert(titleOfAlert) {
    let alert = this.alertCtrl.create({
      title: titleOfAlert,
      subTitle: 'The number you have entered is out of range.  Please enter an appropriate value.  Thanks!',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
