export interface AddFriendState {
  billName: string;
  friends: Friend[];
  selectedFriend: number;
  totalBillPrice: number;
}

export interface Friend {
  profilePic: string;
  displayName: string;
  isSelect: boolean;
}