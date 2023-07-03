import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

import { GreetingsComponent } from './greetings/greetings.component';
import { HomeComponent } from './home/home.component';
import { DesignsComponent } from './home/designs/designs.component';
import { ProductComponent } from './home/product/product.component';
import { ContactComponent } from './home/contact/contact.component';
import { ContactModalComponent } from './home/contact/contact-modal/contact-modal.component';

import { ProjectsComponent } from './projects/projects.component';
import { CalculatorComponent } from './projects/calculator/calculator.component';
import { IconReturnComponent } from './projects/icon-return/icon-return.component';

import { AboutComponent } from './about/about.component';
import { TecnologyComponent } from './about/tecnology/tecnology.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    AboutComponent,
    HomeComponent,
    TecnologyComponent,
    FooterComponent,
    ProjectsComponent,
    HeaderComponent,
    DesignsComponent,
    ProductComponent,
    ContactComponent,
    ContactModalComponent,
    SidenavComponent,
    CalculatorComponent,
    IconReturnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
