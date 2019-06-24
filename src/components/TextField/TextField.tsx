import * as React from 'react';
import { TextFieldProps, TextFieldState } from './TextFieldTypes';
import './TextField.css';

export class TextField
  extends React.Component<TextFieldProps, TextFieldState> {

  render() {
    const {
      name, id, disabled = false, onChange,
      required = false, placeHolder = '',
      type = '', shadow = false, isunderline = false, value
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
        onChange={onChange}
        value={value}
      />
    );
  }

  stylingField(shadow: boolean, isunderline: boolean) {
    if (isunderline) {
      return 'text-field__input-underline';
    } else if (shadow) {
      return 'text-field__input shadow';
    } else {
      return 'text-field__input';
    }
  }
}