import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-google-ad',
  templateUrl: './google-ad.component.html',
  styleUrls: ['./google-ad.component.scss'],
})
export class GoogleAdComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    try{
      (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
    }catch(e){
      console.error("error");
    }
  }

}
