export interface TextFieldProps {
  name?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  placeHolder?: string;
  type?: string;
  isValid?: boolean;
  className?: string;
  shadow: boolean;
}