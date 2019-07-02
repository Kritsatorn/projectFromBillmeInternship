export interface BillingListPageState {
  userId: string;
  groupId: string;
  billInfo: {
    billId: string,
    billName: string,
    billOwner: string,
    billStatus: string,
    publishDate: string,
    image: string
  }[];
  isLoadingComplete: boolean;
  isEmpty: boolean;
}