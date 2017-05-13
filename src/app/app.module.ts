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


import { AuthGuard } from './auth.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages'

import { WishlistComponent } from './wishlist/wishlist.component'
import { CollectableService } from './services/collectable.service';
import { DetailobatComponent } from './detailobat/detailobat.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAMfW6L9tefDxiplTf9ZiH-RSpZK15lclc",
    authDomain: "megapotek.firebaseapp.com",
    databaseURL: "https://megapotek.firebaseio.com",
    storageBucket: "megapotek.appspot.com",
    messagingSenderId: "360839970803"
};

const
firebaseAuthConfig = {
  provider : AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataobatComponent,
    ServicesComponent,
    AboutComponent,
    WishlistComponent,
    DetailobatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    routes,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [AuthGuard, CollectableService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
