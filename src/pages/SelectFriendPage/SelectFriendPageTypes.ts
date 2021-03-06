export interface SelectFriendState {
  billName: string;
  userId: string;
  groupId: string;
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
  boxHeight: number;
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