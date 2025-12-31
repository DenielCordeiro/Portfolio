import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass'],
  standalone: true,
  imports: [RouterLink]
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    document.querySelector<any>('#leftMenu').style.display = "block";
  }

  closeMenu() {
    document.querySelector<any>("#leftMenu").style.display = "none";
  }
}
