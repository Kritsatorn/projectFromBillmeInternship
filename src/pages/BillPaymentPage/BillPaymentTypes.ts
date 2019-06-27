export interface BillPaymentState {
  text?: string;
  cards: Card[];
  boxHeight: number;
}

export interface Card {
  bank: string;
  value: string;
}