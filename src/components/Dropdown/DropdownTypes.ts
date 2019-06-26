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
  isPaymentSelected?: boolean;
  selectedName?: string;
  selectedLogo?: string;
}