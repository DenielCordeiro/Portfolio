import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: false
})
export class AppComponent implements OnInit {
  expirationCounter: any;
  counter: number = 15;
  greetings: boolean = true;

  ngOnInit(): void {
    this.doTimer();
  }

  delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
  }

  async doTimer() {
    for (let i = 0; i < this.counter; i++) {
      // await this.delay(1000);
      await this.delay(200);
      this.counter = this.counter - 1;

      if (this.counter == 7) {
        this.greetings = false;
      }
    }
  }
}
