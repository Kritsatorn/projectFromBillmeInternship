import { MouseEvent } from 'react';

export interface ButtonProps {
  title: string;
  type: string;
  disable: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}