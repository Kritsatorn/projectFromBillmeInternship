export interface CreateBillState {
  totalprice: number;
  items: Item[];
}

export interface Item {
  detail: string;
  price: number;
}