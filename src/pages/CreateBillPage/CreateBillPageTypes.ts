export interface CreateBillState {
  totalPrice: number;
  items: Item[];
  vat: boolean;
  serviceCharge: boolean;
}

export interface Item {
  detail: string;
  price: number;
}