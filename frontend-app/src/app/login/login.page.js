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
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { AuthServiceService } from '../service/auth-service.service';
let LoginPage = class LoginPage {
    constructor(authService, navCtrl, modalController) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.formGroup = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        });
    }
    ionViewWillEnter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.uid = yield this.getLoginStatus();
            if (this.uid !== "") {
                this.navCtrl.navigateForward('folder/general');
            }
        });
    }
    getLoginStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authService.getLoginStatus();
        });
    }
    login(value) {
        this.authService.login(value.email, value.password);
    }
    registerModal() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dismissLogin();
            const registerModal = yield this.modalController.create({
                component: RegisterPage
            });
            return yield registerModal.present();
        });
    }
    dismissLogin() {
        this.modalController.dismiss();
    }
};
LoginPage = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    __metadata("design:paramtypes", [AuthServiceService,
        NavController, ModalController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map