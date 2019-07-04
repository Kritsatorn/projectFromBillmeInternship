export interface BillPaymentState {
  text?: string;
  paymentList: Card[];
  boxHeight: number;
  previousState: SelectFriendState;
}

export interface Card {
  nameEng: string;
  nameTh: string;
  logo: string;
  format: string;
  value: string;
}

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