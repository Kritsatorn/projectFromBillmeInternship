import * as React from 'react';
import { ButtonProps } from './ButtonTypes';
import './Button.css';

export class Button
  extends React.Component<ButtonProps> {
  render() {
    const { title, type, disable, onclick } = this.props;
    const style = this.stylingButton(type, disable);

    return (
      <button
        className={style}
        disabled={disable}
        onClick={onclick}
      >
        {title}
      </button>
    );
  }

  stylingButton(type: string, disable: boolean) {
    return disable ? 'Button disable' : 'Button ' + type;
  }

}