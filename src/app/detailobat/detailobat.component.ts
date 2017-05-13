import { Component, OnInit } from '@angular/core';
import { Collectable } from '../services/collectable.model';
import { CollectableService } from '../services/collectable.service';
import { FirebaseService} from '../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detailobat',
  templateUrl: './detailobat.component.html',
  styleUrls: ['./detailobat.component.css']
})
export class DetailobatComponent implements OnInit {
  id: any;
  listing: any;
  img_src: any;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    //Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;
      console.log(listing);

      // @TODO - Storage Ref
    });
  }

}
