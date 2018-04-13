import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the CellphonesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CellphonesProvider {
   apiKey='';
   url;
  constructor(public http: HttpClient) {
    console.log('Hello CellphonesProvider Provider');
    this.url='http://localhost:8080/phone';
  }
  getCellPhones(){
     return this.http.get(this.url)
       .map(res=>res); 
  }

}
