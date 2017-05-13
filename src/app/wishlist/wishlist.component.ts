import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Collectable } from '../services/collectable.model';
import { CollectableService } from '../services/collectable.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  collectedItems: Collectable[] = [];

  onRemoveFromCollection(item: Collectable) {
    this.collectableService.removeFromCollection(item);
    this.flashMessage.show(`Your wishlist has been removed: '${item.id_obat}'`, 
    {cssClass: 'alert-success', timeout: 3000})
  }

  constructor(
  private collectableService: CollectableService, 
  public flashMessage:FlashMessagesService) { }

  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }
}
