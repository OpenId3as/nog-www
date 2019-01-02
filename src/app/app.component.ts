import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
//import { TranslateService } from '@ngx-translate/core';

import { SharedService } from './utils/service/shared.service';
// import { UtilsService } from './utils/service/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nog';

  validPage = false;
  loading = true;

  constructor(
    //private router: Router,
    //private shared: SharedService,
    // private utils: UtilsService,
    //protected translate: TranslateService,
    private titleService: Title
  ) {

  }
}
