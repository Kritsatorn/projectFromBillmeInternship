export interface SummaryPageState {
  bill: Bill;
  showFriendMenu: boolean;
  friends: Friend[];
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