import * as React from 'react';
import { TextFieldProps } from './TextFieldTypes';
import './TextField.css';

export class TextField
  extends React.Component<TextFieldProps> {

  render() {
    const {
      name, id, disabled,
      required, placeHolder,
      type, shadow = false, isunderline = false
    } = this.props;

    return (
      <input
        name={name}
        id={id}
        type={type}
        className={this.stylingField(shadow, isunderline)}
        required={required}
        placeholder={placeHolder}
        disabled={disabled}
      />
    );
  }

  stylingField(shadow: boolean, isunderline: boolean) {
    if (isunderline) {
      return 'text-field__input-underline';
    }
    return shadow ? 'text-field__input shadow' : 'text-field__input';
  }
}