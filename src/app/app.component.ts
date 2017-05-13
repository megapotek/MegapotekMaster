import { Component} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
  public af:AngularFire, 
  public flashMessage:FlashMessagesService){ }

  ngOnInit(){

  }
  
  login(){
    this.af.auth.login();
  }
  logout(){
    this.af.auth.logout();
    this.flashMessage.show('You are logged out', 
    {cssClass: 'alert-success', timeout: 3000})
  }
}
