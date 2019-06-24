export interface CreateBillState {
  totalPrice: number;
  items: Item[];
  vat: boolean;
  serviceCharge: number;
  serviceChargeStatus: boolean;
}

export interface Item {
  detail: string;
  price: number;
}