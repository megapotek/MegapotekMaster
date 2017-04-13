export class Collectable {
  public id_obat: string;
  public description: string;
  public type: string;
  public price: string;
  public img_src: string;

  constructor(id_obat: string, description: string, type: string, price: string, img_src: string) {
    this.id_obat = id_obat;
    this.description = description;
    this.type = type;
    this.price = price;
    this.img_src = img_src;
  }
}
