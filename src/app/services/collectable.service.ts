import {Collectable} from "./collectable.model";

export class CollectableService{
  private collectables: Collectable[] =[
    { id_obat:'Bisolvon', description: 'obat batuk dan pengencer dahak',
        type:'obat ringan', price: 'Rp 21.009,- / Blister', img_src: 'assets/images/obat_batuk/bisolvon.jpg'},
    { id_obat:'Vicks 44', description: 'obat batuk berdahak dan batuk kering.',
        type:'obat ringan', price: 'Rp 13.052,- / Botol', img_src: 'assets/images/obat_batuk/vicks.jpg'},
    { id_obat:'OBH Combi', description: 'obat batuk berdahak',
        type:'obat ringan', price: 'Rp 11.138,- / Botol', img_src: 'assets/images/obat_batuk/obh.jpg'},
    { id_obat:'Dumin', description: 'Pereda demam dan nyeri',
        type:'obat ringan', price: 'Rp 5.399,- / Strip', img_src: 'assets/images/obat_demam/dumin.jpg'},
    { id_obat:'Paracetamol', description: 'demam, sakit kepala dan sakit gigi',
        type:'obat ringan', price: 'Rp 2.089,- / Strip', img_src: 'assets/images/obat_demam/paracetamol.jpg'},
    { id_obat:'Sanmol', description: 'obat penurun panas anak dan bayi',
        type:'obat ringan', price: 'Rp 19.586,- / Botol', img_src: 'assets/images/obat_demam/sanmol.jpg'},
    { id_obat:'Inza', description: 'Meringankan gejala flu',
        type:'obat ringan', price: 'Rp 2.023,- / Strip', img_src: 'assets/images/obat_flu/inza.jpg'},
    { id_obat:'Mixagrip', description: 'Obat Flu dan Batuk',
        type:'obat ringan', price: 'Rp 1.893,- / Strip', img_src: 'assets/images/obat_flu/mixagrip.jpg'},
    { id_obat:'Procold', description: 'Hidung tersumbat, demam dan sakit kepala',
        type:'obat ringan', price: 'Rp 3.201,- / Strip', img_src: 'assets/images/obat_flu/procold.jpg'},
    { id_obat:'Cataflam', description: 'anti inflamasi non steroid',
        type:'obat ringan', price: 'Rp 3.837,- / Tablet', img_src: 'assets/images/obat_sakit_gigi/cataflam.jpg'},
    { id_obat:'Ponstan', description: 'anti inflamasi dan antipiretik.',
        type:'obat ringan', price: 'Rp 408,- / Tablet', img_src: 'assets/images/obat_sakit_gigi/ponstan.jpg'},
    { id_obat:'Captoril', description: 'Menurunkan tekanan darah, meningkatkan suplai darah',
        type:'obat ringan', price: 'Rp 153,- / Tablet', img_src: 'assets/images/obat_demam/captoril.jpg'},
    { id_obat:'Amlodifine', description: 'mengatasi serangan angina atau angin duduk',
        type:'obat ringan', price: 'Rp 1.485,- / Tablet', img_src: 'assets/images/amlodipine.jpg'}

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
