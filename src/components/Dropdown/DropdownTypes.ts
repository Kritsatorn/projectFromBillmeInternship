export interface DropdownProps {
  title?: string;
  onChange: (bank: Bank) => void;
}

export interface DropdownState {
  displayMenu?: boolean;
  bankInfo: Bank[];
  isPaymentSelected?: boolean;
  selectedBank: Bank;
}

export interface Bank {
  nameEng: string;
  nameTh: string;
  logo: string;
  format: string;
}