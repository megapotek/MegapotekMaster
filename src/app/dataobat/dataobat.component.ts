import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Collectable } from '../services/collectable.model';
import { CollectableService } from '../services/collectable.service';

@Component({
  selector: 'app-dataobat',
  templateUrl: './dataobat.component.html',
  styles: []
})
export class DataobatComponent implements OnInit {
  collectables: Collectable[] = [];
  constructor(private collectableService: CollectableService) {

  }
  addToCart(item: Collectable){
    this.collectableService.addToCollection(item);
    // alert(`Your wishlist has been added: '${item.description}'`);
  }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

}
