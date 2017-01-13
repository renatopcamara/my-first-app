import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Backand provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Backand {
  data: any;
  auth_token: {header_name: string, header_value: string} = {header_name: 'AnonymousToken', header_value: '37491c04-90ca-4dc0-b132-cbcdf243d317'};
  api_url: string = 'https://api.backand.com';
  app_name: string = 'parafazer';

  constructor(public http: Http) {
    this.data = null;
  }

  private authHeader() {
    var authHeader = new Headers();
    authHeader.append(this.auth_token.header_name, this.auth_token.header_value);
    return authHeader;
  }

  public getTodos() {
    return this.http.get(this.api_url + '/1/objects/todos?returnObject=true', {
      headers: this.authHeader()
    })
    .map(res => res.json())
  }

  public addTodo(name: string) {
    let data = JSON.stringify({name: name});

    return this.http.post(this.api_url + '/1/objects/todos?returnObject=true', data,
    {
      headers: this.authHeader()
    })
    .map(res => {
      return res.json();
    });
  }

  public removeTodo(id: string) {
    return this.http.delete(this.api_url + '/1/objects/todos/' + id,
    {
      headers: this.authHeader()
    })
    .map(res => {
      return res.json();
    });
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
