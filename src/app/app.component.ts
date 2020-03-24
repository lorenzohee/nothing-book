import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CfgService } from './service/cfg.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public selected = 'books'
  public bookTypes = []
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router, 
    private cfgService: CfgService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selected = path.toLowerCase()
    }
    this.router.events.subscribe((event) => {
      // example: NavigationStart, RoutesRecognized, NavigationEnd
      this.changeRoute()
    });
    this.getBookType()
  }

  getBookType(){
    this.cfgService.getCfgList({key: 'ARTICLE_TYPE'}).subscribe(res=>{
      this.bookTypes = JSON.parse(res[0].valu)
    })
  }

  changeRoute(){
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selected = path.toLowerCase()
    }else{
      this.selected = 'books'
    }
  }
}
