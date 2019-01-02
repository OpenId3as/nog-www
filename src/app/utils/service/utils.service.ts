import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';
import { Local } from '../../utils/service/local.service';

@Injectable()
export class UtilsService {
  constructor(private http: Http, private local: Local) {}

  getLanguages(): Observable<any> {
    return this.http
      .get(`${env.api_nog.endpoint}/language`)
      .pipe(
        map(response => response.json()),
        map(res => {
          return res;
        })
      );
  }

  private getHeaders(header, option: any = null) {
    const headers = new Headers();

    // tslint:disable-next-line:forin
    for (const prop in header) {
      headers.append(prop, header[prop]);
    }

    if (option) {
      // tslint:disable-next-line:forin
      for (const prop in option) {
        headers.append(prop, option[prop]);
      }
    }

    return headers;
  }

  private handleError(error: any) {
    const errMsg = {
      data: {
        success: false,
        msg: 'Um erro inesperado ocorreu.'
      }
    };

    try {
      const body =
        typeof JSON.parse(error._body) === 'string'
          ? JSON.parse(error)
          : JSON.parse(error._body);

      const msg = body.msg || body.statusText;
      errMsg.data.msg = msg;
    } catch (err) {}

    return Observable.create(function(observer) {
      const resp = error.success && !error.status ? error : errMsg;
      observer.next(resp);
      observer.complete();
    });
  }
}