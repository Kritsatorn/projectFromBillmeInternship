export interface CreateBillState {
  totalPrice: number;
  items: Item[];
}

export interface Item {
  detail: string;
  price: number;
}