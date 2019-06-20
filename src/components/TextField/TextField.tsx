import * as React from 'react';
import { TextFieldProps } from './TextFieldTypes';
import './TextField.css';

export class TextField
  extends React.Component<TextFieldProps> {

  render() {
    const {
      name, id, disabled,
      required, placeHolder,
      type, shadow = false
    } = this.props;

    return (
      <input
        name={name}
        id={id}
        type={type}
        className={this.stylingField(shadow)}
        required={required}
        placeholder={placeHolder}
        disabled={disabled}
      />
    );
  }

  stylingField(shadow: boolean) {
    return shadow ? 'text-field__input shadow' : 'text-field__input';
  }
}