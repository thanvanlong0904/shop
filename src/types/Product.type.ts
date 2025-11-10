export interface Product {
  name: string;
  oldPrice: number;
  price: number;
  img: string;
  sold: number;
  _id: string;
}

export interface Cart extends Product {
  qty: number;
}
