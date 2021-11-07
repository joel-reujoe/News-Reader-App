var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { APIServiceService } from '../service/apiservice.service';
let FolderPage = class FolderPage {
    constructor(iab, activatedRoute, apiService, navCtrl) {
        this.iab = iab;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.articles = [];
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(this.folder);
        this.apiService.getNewsList(this.folder).subscribe(resp => {
            const articlesResp = resp['articles'];
            console.log(articlesResp);
            this.articles = articlesResp;
        });
    }
    redirectTo(url) {
        let target = "_blank";
        this.iab.create(url, target, this.options);
    }
};
FolderPage = __decorate([
    Component({
        selector: 'app-folder',
        templateUrl: './folder.page.html',
        styleUrls: ['./folder.page.scss'],
    }),
    __metadata("design:paramtypes", [InAppBrowser, ActivatedRoute, APIServiceService, NavController])
], FolderPage);
export { FolderPage };
//# sourceMappingURL=folder.page.js.map