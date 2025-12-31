import { Component } from '@angular/core';
import { DesignsComponent } from './designs/designs.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  standalone: true,
  imports: [
    DesignsComponent,
    ProductComponent,
    ContactComponent
  ]
})
export class HomeComponent {
  constructor() { }
}
