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
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthServiceService } from '../service/auth-service.service';
let RegisterPage = class RegisterPage {
    constructor(modalController, authService) {
        this.modalController = modalController;
        this.authService = authService;
        this.formGroup = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        });
    }
    ngOnInit() {
    }
    register(value) {
        this.authService.register(value.email, value.password);
    }
    dismissRegister() {
        this.modalController.dismiss();
    }
    loginModal() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dismissRegister();
            const loginModal = yield this.modalController.create({
                component: LoginPage,
            });
            return yield loginModal.present();
        });
    }
};
RegisterPage = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    __metadata("design:paramtypes", [ModalController, AuthServiceService])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map