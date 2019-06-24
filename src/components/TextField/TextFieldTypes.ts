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
  isUnderline?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}