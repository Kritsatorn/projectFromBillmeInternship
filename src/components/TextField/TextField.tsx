import * as React from 'react';
import { TextFieldProps, TextFieldState } from './TextFieldTypes';
import './TextField.css';

export class TextField
  extends React.Component<TextFieldProps, TextFieldState> {

  render() {
    const {
      name, id, disabled = false, onChange,
      required = false, placeHolder = '',
      type = '', shadow = false, isUnderline = false, value
    } = this.props;

    return (
      <input
        name={name}
        id={id}
        type={type}
        className={this.stylingField(shadow, isUnderline)}
        required={required}
        placeholder={placeHolder}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
    );
  }

  stylingField(shadow: boolean, isUnderline: boolean) {
    if (isUnderline) {
      return 'text-field__input-underline';
    } else if (shadow) {
      return 'text-field__input shadow';
    } else {
      return 'text-field__input';
    }
  }
}