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
import { ActivatedRoute, Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
let BrowserPage = class BrowserPage {
    constructor(iab, route, router, navCtrl) {
        this.iab = iab;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
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
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.url = this.router.getCurrentNavigation().extras.state.url;
            }
        });
    }
    ngOnInit() {
        let target = "_blank";
        this.iab.create(this.url, target, this.options);
    }
};
BrowserPage = __decorate([
    Component({
        selector: 'app-browser',
        templateUrl: './browser.page.html',
        styleUrls: ['./browser.page.scss'],
    }),
    __metadata("design:paramtypes", [InAppBrowser, ActivatedRoute, Router, NavController])
], BrowserPage);
export { BrowserPage };
//# sourceMappingURL=browser.page.js.map