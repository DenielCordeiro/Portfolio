import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  urlToJson = 'assets/pt.json';
  result: any;
  linkedin: string = 'https://www.linkedin.com/in/daniel-de-souza-cordeiro-020915198/';

  constructor( public http: HttpClient ) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
   }

  ngOnInit(): void {
  }

}
