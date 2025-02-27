import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './layout/login/login.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BackgroundComponent } from './layout/background/background.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    BackgroundComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToggleButtonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    ImageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
