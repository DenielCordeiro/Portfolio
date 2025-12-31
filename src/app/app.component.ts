import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { GreetingsComponent } from './greetings/greetings.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    GreetingsComponent
  ],
})
export class AppComponent implements OnInit {
  counter: number = 3;
  greetings: boolean = true;

  ngOnInit(): void {
    this.startCountdown();
  }  

  private delay(delay: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, delay);
    })
  }

  private async startCountdown() {
    while (this.counter > 0) {
      await this.delay(1000);
      this.counter --;
    } 

    this.greetings = false;
  }
}
