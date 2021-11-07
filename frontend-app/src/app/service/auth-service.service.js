var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';
let AuthServiceService = class AuthServiceService {
    constructor(http, alertService, navCtrl) {
        this.http = http;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.API_URL = 'http://localhost:8000';
    }
    getLoginStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = yield Storage.get({ key: 'uid' });
            this.uid = uid.value;
            return this.uid;
        });
    }
    login(email, password) {
        return this.http.post(this.API_URL + '/signIn', { email: email, password: password }).subscribe((resp) => __awaiter(this, void 0, void 0, function* () {
            console.log(resp);
            if (resp['status'] === true) {
                yield Storage.set({
                    key: 'uid',
                    value: resp['data'].uid
                })
                    .then(() => {
                    console.log('Token Stored');
                    this.navCtrl.navigateForward('folder/general');
                }, error => console.error('Error storing item', error));
            }
            else {
                this.alertService.presentToast(resp['msg']);
            }
        }));
    }
    register(email, password) {
        return this.http.post(this.API_URL + '/registerUser', { email: email, password: password }).subscribe((resp) => __awaiter(this, void 0, void 0, function* () {
            console.log(resp);
            this.alertService.presentToast(resp['msg']);
        }));
    }
};
AuthServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient,
        AlertService,
        NavController])
], AuthServiceService);
export { AuthServiceService };
//# sourceMappingURL=auth-service.service.js.map