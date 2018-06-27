webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ColorPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ColorPickerPage = /** @class */ (function () {
    function ColorPickerPage(bluetoothSerial, alertCtrl, navCtrl, navParams) {
        this.bluetoothSerial = bluetoothSerial;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.labelForNumberInput = "Box Number: ";
        this.controlOfLEDs = 'b';
        this.color = "255,0,0";
        this.redValue = "255";
        this.greenValue = "95";
        this.blueValue = "0";
        //this.comboColor = this.redValue+","+this.greenValue+","+this.blueValue;
        this.colorCombo = "rgb(" + this.redValue + "," + this.greenValue + "," + this.blueValue + ")";
    }
    ColorPickerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ColorPickerPage');
    };
    ColorPickerPage.prototype.colorChanged = function () {
        this.colorCombo = "rgb(" + this.redValue + "," + this.greenValue + "," + this.blueValue + ")";
    };
    ColorPickerPage.prototype.write = function () {
        var _this = this;
        this.bluetoothSerial.write('hello world').then(function () { _this.dataSent = 'yes'; }, function () { _this.dataSent = 'no'; });
    };
    ColorPickerPage.prototype.presentPrompt = function () {
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        if (true) {
                            // logged in!
                            console.log(true);
                        }
                        else {
                            // invalid login
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ColorPickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-color-picker',template:/*ion-inline-start:"C:\Users\mclemens\Desktop\Mobile-App-MM\midimosaicmobileapp\src\pages\color-picker\color-picker.html"*/'<!--\n\n  Generated template for the ColorPickerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ColorPicker</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="color-blob" [ngStyle]="{backgroundColor: colorCombo}">\n\n    <div >\n\n        <button (click)="write()" ion-button full style="background: rgb(0,0,0,0); box-shadow: 0 0 0 #000000; -webkit-box-shadow: 0 0 0 #000000;">Full Button</button>\n\n    </div>\n\n  </div>\n\n  <div style="position: fixed;bottom: 8px;left:0px;right:0px;">\n\n      <ion-item>\n\n          <ion-label>Breadth of Control</ion-label>\n\n          <ion-select [(ngModel)]="controlOfLEDs">\n\n            <ion-option value="b">Box</ion-option>\n\n            <ion-option value="r">Row</ion-option>\n\n            <ion-option value="c">Column</ion-option>\n\n            <ion-option value="a">All</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div style="padding: 0px 15px;">\n\n            <ion-range min="0" max="255" (ionChange)="colorChanged($event)" [(ngModel)]="redValue" color="danger" pin="true"></ion-range>\n\n            <ion-range min="0" max="255" (ionChange)="colorChanged($event)" [(ngModel)]="greenValue" color="secondary" pin="true"></ion-range>\n\n            <ion-range min="0" max="255" (ionChange)="colorChanged($event)" [(ngModel)]="blueValue" color="primary" pin="true"></ion-range>\n\n            <button ion-button block [ngStyle]="{backgroundColor: colorCombo}">Send Color</button>\n\n        </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mclemens\Desktop\Mobile-App-MM\midimosaicmobileapp\src\pages\color-picker\color-picker.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _d || Object])
    ], ColorPickerPage);
    return ColorPickerPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=color-picker.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_picker_color_picker__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(bluetoothSerial, alertCtrl, navController) {
        this.bluetoothSerial = bluetoothSerial;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.dataSent = 'null';
        this.success = function (data) { return alert(data); };
        this.fail = function (error) { return alert(error); };
        bluetoothSerial.enable();
    }
    HomePage.prototype.moveToDemoPage = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__color_picker_color_picker__["a" /* ColorPickerPage */]);
    };
    HomePage.prototype.write = function () {
        var _this = this;
        this.bluetoothSerial.write('hello world').then(function () { _this.dataSent = 'yes'; }, function () { _this.dataSent = 'no'; });
    };
    HomePage.prototype.read = function () {
        var _this = this;
        this.dataReceived = this.bluetoothSerial.read().then(function (data) { _this.dataSent = data; }, function () { _this.dataSent = 'no'; });
    };
    HomePage.prototype.startScanning = function () {
        var _this = this;
        this.pairedDevices = null;
        this.unpairedDevices = null;
        this.gettingDevices = true;
        this.bluetoothSerial.discoverUnpaired().then(function (success) {
            _this.unpairedDevices = success;
            _this.gettingDevices = false;
            success.forEach(function (element) {
                // alert(element.name);
            });
        }, function (err) {
            console.log(err);
        });
        this.bluetoothSerial.list().then(function (success) {
            _this.pairedDevices = success;
        }, function (err) {
        });
    };
    HomePage.prototype.selectDevice = function (address) {
        var _this = this;
        this.address = address;
        var alert = this.alertCtrl.create({
            title: 'Connect',
            message: 'Do you want to connect with?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Connect',
                    handler: function () {
                        _this.bluetoothSerial.connect(address).subscribe(_this.success, _this.fail);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.disconnect = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Disconnect?',
            message: 'Do you want to Disconnect?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Disconnect',
                    handler: function () {
                        _this.bluetoothSerial.disconnect();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\mclemens\Desktop\Mobile-App-MM\midimosaicmobileapp\src\pages\home\home.html"*/'<ion-content overflow-scroll="true">\n\n<ion-list padding>\n\n    <button ion-button block (click)="moveToDemoPage()">Move Pages</button>\n\n    <button ion-button block (click)="write()">Write</button>\n\n    <h2>{{dataSent}}</h2>\n\n    <button ion-button block (click)="read()">Read</button>\n\n    <h2>{{dataReceived}}</h2>\n\n    <h4>Address: {{address}}</h4>\n\n  <button ion-button block (click)="startScanning()">scan</button>\n\n  <ion-list-header>\n\n    Paired Devices\n\n  </ion-list-header>\n\n  <ion-item *ngFor="let device of pairedDevices">\n\n    {{device.name}}\n\n  </ion-item>\n\n  <button ion-button block (click)="disconnect()">Disconnect</button>\n\n  <ion-list-header>\n\n    Available Devices\n\n  </ion-list-header>\n\n  <ion-item *ngFor=\'let device of unpairedDevices\'>\n\n    <span (click)="selectDevice(device.address)">\n\n      {{device.name}}\n\n    </span>\n\n  </ion-item>\n\n  <ion-spinner name="crescent" *ngIf="gettingDevices"></ion-spinner>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mclemens\Desktop\Mobile-App-MM\midimosaicmobileapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_bluetooth_serial__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_color_picker_color_picker__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_color_picker_color_picker__["a" /* ColorPickerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_color_picker_color_picker__["a" /* ColorPickerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mclemens\Desktop\Mobile-App-MM\midimosaicmobileapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\mclemens\Desktop\Mobile-App-MM\midimosaicmobileapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map