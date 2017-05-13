import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;

  constructor(private af:AngularFire) { }
  getListings(){
      this.listings = this.af.database.list('/dataobat') as FirebaseListObservable<Listing[]>
      return this.listings;
  }
  getListingDetails(id){
    this.listing = this.af.database.object('/dataobat/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }
}

interface Listing{
  $key?:string;
  id_obat?:string;
  description?:string;
  img_src?:string;
  price?:string;
  type?:string;
}