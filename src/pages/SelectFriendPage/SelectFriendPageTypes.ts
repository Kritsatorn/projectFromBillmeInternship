export interface SelectFriendState {
  billName: string;
  friends: Friend[];
  selectedFriendList: Friend[];
  selectedFriend: number;
  totalBillPrice: number;
}

export interface Friend {
  profilePic: string;
  displayName: string;
  isSelect: boolean;
  owner: boolean;
}