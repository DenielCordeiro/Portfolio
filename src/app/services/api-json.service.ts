import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {
  // urlToJson = 'assets/pt.json';
  // result: any;
  // translator: any;

  constructor(public http: HttpClient) {
    // this.translator = this.http.get<any>(this.urlToJson).subscribe(response => {
    //   this.result = response;
    // });
  }
}
