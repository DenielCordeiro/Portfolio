import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  standalone: false
})
export class ProductComponent implements OnInit {
  urlToJson = 'assets/pt.json';
  result: any;

  constructor( public http: HttpClient ) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });
   }

  ngOnInit(): void {
  }

}
