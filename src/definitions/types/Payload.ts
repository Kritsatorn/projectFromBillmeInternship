export interface Payload {

  status: string;
  name: string;
  image_url: string;
  selected_friends: {
    user_id: string;
    display_name: string;
    profile_picture_url: string;
    owner: boolean;
  }[];
  payments: {
    type: string;
    name_eng: string;
    name_th: string;
    logo: string;
    number: string;
  }[];
  items: {
    detail: string;
    price: number;
  }[];
  vat: number;
  vat_status: boolean;
  vat_price: number;
  service_charge: number;
  service_charge_price: number;
  service_charge_status: boolean;
  total_price: number;
  total_bill_price: number;
}