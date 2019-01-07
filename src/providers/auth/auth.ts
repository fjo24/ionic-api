import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { endpoint, passportClient } from '../../settings/Laravel';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    //console.log('Hello AuthProvider Provider');
  }

  login (user: any)
  {
    let request = {
      grant_type: passportClient.grant_type,
      client_id: passportClient.client_id,
      client_secret: passportClient.client_secret,
      username: user.email,
      password: user.password,
    }

    return this.http.post(`${endpoint}/oauth/token`, request).toPromise();
  }

  register (user: any)
  {
    return this.http.post(`${endpoint}/api/register`, user).toPromise();
  }

}
