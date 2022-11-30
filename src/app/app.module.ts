import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TecnologyComponent } from './about/tecnology/tecnology.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignsComponent } from './home/designs/designs.component';
import { ProductComponent } from './home/product/product.component';
import { ContactComponent } from './home/contact/contact.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
