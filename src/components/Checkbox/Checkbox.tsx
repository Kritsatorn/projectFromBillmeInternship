import * as React from 'react';
import { CheckboxProps } from './CheckboxType';
import './Checkbox.css';

export class Checkbox extends React.Component<CheckboxProps> {

  render() {
    const{title, checked} = this.props;

    return (
      <div>
        <label className="Container">
          <input
            type="checkbox"
            className="Checkbox__input"
            checked={checked}
          />
        <span className="Text-label">{title}</span>
        </label>
      </div>
    );
  }
}