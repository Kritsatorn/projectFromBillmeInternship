export interface CreateBillState {
  totalPrice: number;
  items: Item[];
  vat: boolean;
  vatPrice: number;
  totalBillPrice: number;
  serviceCharge: number;
  serviceChargeStatus: boolean;
  serviceChargePrice: number;
}

export interface Item {
  detail: string;
  price: number;
}