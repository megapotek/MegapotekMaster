import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Collectable } from '../services/collectable.model';
import { CollectableService } from '../services/collectable.service';
import { FirebaseService } from '../services/firebase.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dataobat',
  templateUrl: './dataobat.component.html',
  styles: []
})
export class DataobatComponent implements OnInit {
  listings:any;
  collectables: Collectable[] = [];
  constructor(
    private collectableService: CollectableService, 
    private firebaseService:FirebaseService,
    public flashMessage:FlashMessagesService) {

  }
  addToCart(item: Collectable){
    this.collectableService.addToCollection(item);
    this.flashMessage.show(`Your wishlist has been added: '${item.id_obat}'`, 
    {cssClass: 'alert-success', timeout: 3000})
    // alert(`Your wishlist has been added: '${item.id_obat}'`);
  }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
    this.firebaseService.getListings().subscribe(listings => {
      // console.log(listings);
      this.listings = listings;
    });
  }

}
