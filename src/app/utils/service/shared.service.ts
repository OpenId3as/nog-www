import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Session } from './session.service';

@Injectable()
export class SharedService {

    constructor(
        private storage: Session,
      ) {}

}