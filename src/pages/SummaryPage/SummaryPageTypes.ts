export interface SummaryPageState {
  bill: Bill;
  showFriendMenu: boolean;
  url: string;
  previousState: PreviousState;
}

export interface PreviousState {
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
  paymentList: Card[];
}

export interface Card {
  nameEng: string;
  nameTh: string;
  logo: string;
  format: string;
  value: string;
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

export interface Bill {
  billImage: string;
  billName: string;
  billDate: string;
  billOwnerName: string;
  billOwnerImage: string;
}

export interface Menu {
  menuName: string;
  menuPrice: string;
}