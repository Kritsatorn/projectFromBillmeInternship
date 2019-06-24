import * as React from 'react';

export interface TextFieldState {
  type?: string;
}
export interface TextFieldProps {
  name: string;
  id: string;
  disabled?: boolean;
  required?: boolean;
  placeHolder?: string;
  type?: string;
  isValid?: boolean;
  shadow?: boolean;
  isunderline?: boolean;
  value?: string | number;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}