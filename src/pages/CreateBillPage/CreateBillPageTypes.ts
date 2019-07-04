export interface CreateBillState {
  billName: string;
  userId: string;
  groupId: string;
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
  boxHeight: number;
}

export interface Friend {
  userId: string;
  profilePic: string;
  displayName: string;
  owner: boolean;
}

export interface Item {
  detail: string;
  price: number;
}