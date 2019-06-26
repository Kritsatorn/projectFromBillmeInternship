export interface DropdownProps {
  title?: string;
  onChange: (value: string) => void;
}

export interface DropdownState {
  displayMenu?: boolean;
  bankInfo: {
    name?: string;
    logo?: string;
  }[];
  IsPaymentSelected?: boolean;
  selectedName?: string;
  selectedLogo?: string;
}