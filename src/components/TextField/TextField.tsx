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

      // const fieldstyle = this.stylingField(className);
      return (
        <div className="Text-field">
          <input
            name={name}
            id={id}
            type={type}
            className="Text-field__input"
            required={required}
            placeholder={placeHolder}
            disabled={disabled}
          />
        </div>
      );

    }
    stylingField(className: string) {
      return 'Text-field ' + className;
    }
  }