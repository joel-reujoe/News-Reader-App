import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { AuthServiceService } from '../service/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formGroup:FormGroup
  email:string
  password:string
  uid:string

  constructor(private authService: AuthServiceService,
    private navCtrl: NavController,private modalController: ModalController,) { 
      this.formGroup = new FormGroup({
        email: new FormControl(),
        password:new FormControl()
     });
    }

    async ionViewWillEnter(){
      this.uid = await this.getLoginStatus()
      if(this.uid !== "")
      {
        this.navCtrl.navigateForward('folder/general')
      }
    }

    async getLoginStatus(){
      return await this.authService.getLoginStatus();
    }


  login(value) {
    this.authService.login(value.email, value.password);
  }

  async registerModal()
  {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  dismissLogin() {
    this.modalController.dismiss();
  }

}
