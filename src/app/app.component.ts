import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  result: any;
  urlToJson = 'assets/pt.json';
  expirationCounter: any;
  counter: number = 15;
  greetings: boolean = true;

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.result = response;
    });

    this.doTimer();
  }

  delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
  }

  async doTimer() {
    for (let i = 0; i < this.counter; i++) {
      await this.delay(1000);
      this.counter = this.counter - 1;

      if (this.counter == 7) {
        this.greetings = false;
      }
    }
  }
}
