export interface SelectFriendState {
  billName: string;
  friends: Friend[];
  selectedFriendList: Friend[];
  selectedFriend: number;
  totalPrice: number;
  items: Item[];
  vat: number;
  vatStatus: boolean;
  vatPrice: number;
  totalBillPrice: number;
  serviceCharge: number;
  serviceChargeStatus: boolean;
  serviceChargePrice: number;
}

export interface Friend {
  profilePic: string;
  displayName: string;
  isSelect: boolean;
  owner: boolean;
}

export interface Item {
  detail: string;
  price: number;
}