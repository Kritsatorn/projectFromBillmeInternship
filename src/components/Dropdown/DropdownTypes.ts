export interface DropdownProps {
  title?: string;
}

export interface DropdownState {
  displayMenu?: boolean;
  bankInfo: {
    name?: string;
    logo?: string;
  }[];
  paymentIsSelected?: boolean;
  selectedName?: string;
  selectedLogo?: string;
}