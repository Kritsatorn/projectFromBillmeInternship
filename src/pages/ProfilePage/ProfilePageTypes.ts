export interface ProfilePageState {
  userId: string;
  billInfo: {
    billId: string,
    billName: string,
    billOwner: string,
    billStatus: boolean,
    publishDate: string,
    image: string
  }[];
  isLoadingComplete: boolean;
}