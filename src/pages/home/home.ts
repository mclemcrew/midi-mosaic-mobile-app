import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { ColorPickerPage } from '../color-picker/color-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  dataSent = 'null';
  dataReceived;
  address: any;
  loadingMM: any;
  loadingSearching: any;

  constructor(public loadingCtrl: LoadingController,private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController, private navController: NavController ) {
    bluetoothSerial.enable();
  }

  navToColorPage() {
    this.navController.push(ColorPickerPage);
  }

  write() {
    this.bluetoothSerial.write('hello world').then(()=> {this.dataSent='yes'},()=> {this.dataSent='no'});
  }

  read() {
    this.dataReceived = this.bluetoothSerial.read().then((data)=> {this.dataSent=data},()=> {this.dataSent='no'});
  }

  startScanning() {
    this.presentLoadingSearching();
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      this.unpairedDevices = success;
      this.gettingDevices = false;
      success.forEach(element => {
        // alert(element.name);
        this.loadingSearching.dismiss();
      });
    },
      (err) => {
        console.log(err);
        this.loadingSearching.dismiss();
      })

    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {
      })
  }
  
  success = (data) => {
    // alert(data);
    this.loadingMM.dismiss();
    this.navToColorPage();
  }

  fail = (error) => alert(error);

  selectDevice(address: any) {
    this.address = address;
    let alert = this.alertCtrl.create({
      title: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.presentLoadingMM();
            this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();

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

  presentLoadingMM() {
    this.loadingMM = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Connecting to Midi Mosaic...'
    });
  
    this.loadingMM.present();
  
    setTimeout(() => {
      this.loadingMM.dismiss();
    }, 5000);
  }

  presentLoadingSearching() {
    this.loadingSearching = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Searching for Devices...'
    });
  
    this.loadingSearching.present();
  
    setTimeout(() => {
      this.loadingSearching.dismiss();
    }, 5000);
  }

}