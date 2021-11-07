import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formGroup:FormGroup
  email:string
  password:string
  constructor(private modalController:ModalController,private authService:AuthServiceService) {
    this.formGroup = new FormGroup({
      email: new FormControl(),
      password:new FormControl()
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
  async loginModal() {
    this.dismissRegister();
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

}
