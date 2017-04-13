import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Collectable } from '../services/collectable.model';
import { CollectableService } from '../services/collectable.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  collectedItems: Collectable[] = [];

  onRemoveFromCollection(item: Collectable) {
    this.collectableService.removeFromCollection(item);
  }

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }
}
