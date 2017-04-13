import {Collectable} from "./collectable.model";

export class CollectableService{
  private collectables: Collectable[] =[
    { id_obat:'obat batuk', description: 'Obat untuk orang yang mengidap penyakit batuk batuk berdahak, dan kering',
      type:'obat ringan', price: '5000', img_src: 'assets/images/space1.jpg'},
    { id_obat:'obat maag', description: 'Obat untuk orang yang mengidap penyakit maag',
      type:'obat ringan', price: '10000', img_src: 'assets/images/space1.jpg'},
    { id_obat:'obat gatel', description: 'Obat untuk orang yang mengidap penyakit gatelan',
      type:'obat ringan', price: '10000', img_src: 'assets/images/space1.jpg'},
    { id_obat:'obat kurap', description: 'Obat untuk orang yang mengidap penyakit kurapan',
      type:'obat ringan', price: '10000', img_src: 'assets/images/space3.jpg'},
    { id_obat:'obat flu', description: 'Obat untuk orang yang mengidap penyakit influenza',
      type:'obat ringan', price: '10000', img_src: 'assets/images/space3.jpg'}

  ];

  private  collection: Collectable[] = [];

  getCollectables(){
    return this.collectables;
  }
  getCollection(){
    return this.collection;
  }

  addToCollection(item: Collectable){
    if(this.collection.indexOf(item) !== -1){
      return;
    }
    this.collection.push(item)
  }
  removeFromCollection(item: Collectable){
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}
