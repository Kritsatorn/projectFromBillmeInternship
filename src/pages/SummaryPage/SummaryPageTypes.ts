export interface SummaryPageState {
  bill: Bill;
}

export interface Bill {
  billImage: string;
  billName: string;
  billDate: string;
  billOwnerName: string;
  billOwnerImage: string;
}