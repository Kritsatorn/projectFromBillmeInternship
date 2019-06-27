export interface SummaryPageState {
  text?: string;
  bill: Bill;
}

export interface Bill {
  billImage: string;
  billName: string;
  billDate: string;
  billOwnerName: string;
  billOwnerImage: string;
}