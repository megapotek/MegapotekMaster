import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import 'hammerjs';
import {routes} from './app.router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataobatComponent } from './dataobat/dataobat.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';

import { AuthGuard } from './auth.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { WishlistComponent } from './wishlist/wishlist.component'
import { CollectableService } from './services/collectable.service';

export const firebaseConfig = {
    apiKey: "AIzaSyAMfW6L9tefDxiplTf9ZiH-RSpZK15lclc",
    authDomain: "megapotek.firebaseapp.com",
    databaseURL: "https://megapotek.firebaseio.com",
    storageBucket: "megapotek.appspot.com",
    messagingSenderId: "360839970803"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataobatComponent,
    ServicesComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    routes,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthGuard, CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
