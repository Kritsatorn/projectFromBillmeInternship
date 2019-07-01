export interface SummaryPageState {
  bill: Bill;
  showFriendMenu: boolean;
  friends: Friend[];
  menu: Menu[];
  servicePrice: number;
  vatPrice: number;
  totalPrice: number;
}

export interface Bill {
  billImage: string;
  billName: string;
  billDate: string;
  billOwnerName: string;
  billOwnerImage: string;
}

export interface Friend {
  userId: string;
  profilePic: string;
  displayName: string;
  owner: boolean;
}

export interface Menu {
  menuName: string;
  menuPrice: string;
}