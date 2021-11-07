import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { Article } from 'src/models/article-models';
import { APIServiceService } from '../service/apiservice.service';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public articles:Article[] = []

  constructor(private iab: InAppBrowser,private activatedRoute: ActivatedRoute, public apiService:APIServiceService,public navCtrl: NavController,private authService: AuthServiceService,) { }

  uid:string
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
  };

  async ionViewWillEnter(){
    this.uid = await this.getLoginStatus()
    if(this.uid === null)
    {
      this.navCtrl.navigateForward('login')
    }
  }

  async getLoginStatus(){
    return await this.authService.getLoginStatus();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.folder)
    this.apiService.getNewsList(this.folder).subscribe(resp=>{
      const articlesResp = resp['articles']
      console.log(articlesResp)
      
      this.articles = articlesResp
    });

    
    
  }

  

  redirectTo(url)
  {
    let target = "_blank";
    this.iab.create(url,target,this.options);
  }

}
