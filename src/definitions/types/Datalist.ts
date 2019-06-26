export interface BillDataAPI {
  id: string;
  bill_name: string;
  owner: string;
  published_date: string;
  bill_status: boolean;
  bill_image: string;
}

export interface BankData {
  id: string;
  name: string;
  logo: string;
  format: string;
}