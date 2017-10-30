import {AfterViewInit, Component} from '@angular/core';
import { LoopBackConfig } from './shared/sdk/index';

declare var $: any;

const DOC = document;
const $DOC = $(document);
const $BODY = $('body');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  AfterViewInit {
  title = 'app works!';
  profileEmailField  = 'profile_email';
  constructor() {
    // RemarkPlugin.register('scrollable', ScrollablePlugin);
    LoopBackConfig.setBaseURL('http://api.ioscreatix.com');
    LoopBackConfig.setApiVersion('api');
  }
  ngAfterViewInit() {
  }
}
