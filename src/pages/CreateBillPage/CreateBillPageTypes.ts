export interface CreateBillState {
  totalprice: number;
  items: {
    detail: string;
    price: number;
  }[];
}