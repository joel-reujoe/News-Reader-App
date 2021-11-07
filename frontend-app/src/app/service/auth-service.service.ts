import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Storage } from '@capacitor/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  API_URL = 'http://localhost:8000'
  uid:string

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }


  async getLoginStatus(){
     const uid = await Storage.get({key:'uid'})
     this.uid = uid.value
     return this.uid
  }


  login(email: String, password: String) {
    return this.http.post(this.API_URL + '/signIn',
      {email: email, password: password}
    ).subscribe(async(resp)=>{
      console.log(resp)
      if(resp['status']===true)
      {
        await Storage.set({
          key:'uid',
          value:resp['data'].uid
        })
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
      }else{
        this.alertService.presentToast(resp['msg'])
      }
    })
  }

  register(email: String, password: String) {
    return this.http.post(this.API_URL + '/registerUser',
      {email: email, password: password}
    ).subscribe(async(resp)=>{
      console.log(resp)
      this.alertService.presentToast(resp['msg'])
    })
  }
}
