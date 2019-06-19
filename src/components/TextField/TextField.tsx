import * as React from 'react';
import { TextFieldProps } from './TextFieldTypes';
import './TextField.css';

export class TextField
  extends React.Component<TextFieldProps> {

  render() {
    const {
      name, id, disabled,
      required, placeHolder,
      type
    } = this.props;

    return (
      <input
        name={name}
        id={id}
        type={type}
        className="text-field__input"
        required={required}
        placeholder={placeHolder}
        disabled={disabled}
      />
    );
  }

  stylingField(className: string) {
    return 'Text-field ' + className;
  }
}