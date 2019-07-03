export interface BillDataAPI {
  id: string;
  status: string;
  name: string;
  owner_id: string;
  image_url: string;
  created: string;
}

export interface BankData {
  id: string;
  name_eng: string;
  name_th: string;
  logo: string;
  format: string;
}