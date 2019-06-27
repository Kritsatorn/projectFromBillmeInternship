export interface CreateBillState {
  billName: string;
  totalPrice: number;
  items: Item[];
  vat: number;
  vatStatus: boolean;
  vatPrice: number;
  totalBillPrice: number;
  serviceCharge: number;
  serviceChargeStatus: boolean;
  serviceChargePrice: number;
  selectedFriendList: Friend[];
}

export interface Friend {
  userId: string;
  profilePic: string;
  displayName: string;
  isSelect: boolean;
  owner: boolean;
}

export interface Item {
  detail: string;
  price: number;
}