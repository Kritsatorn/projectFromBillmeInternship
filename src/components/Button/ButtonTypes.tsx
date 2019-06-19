import { MouseEvent } from 'react';

export interface ButtonProps {
  title: string;
  type: string;
  disable: boolean;
  onclick?: (event: MouseEvent<HTMLButtonElement>) => void;
}