import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.sass'],
})
export class GreetingsComponent implements OnInit {
  urlToJson = 'assets/pt.json';
  supplementaryTextForGreetings: string = '';

  constructor(public http: HttpClient) {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.supplementaryTextForGreetings = response?.greetings;
      console.log(this.supplementaryTextForGreetings);
    });
  }

  ngOnInit(): void {}
}