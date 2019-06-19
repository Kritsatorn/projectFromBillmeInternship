import * as React from 'react';
import { CheckboxProps } from './CheckboxType';
import './Checkbox.css';

export class Checkbox extends React.Component<CheckboxProps> {

  render() {
    const{title, checked} = this.props;

    return (
      <div>
        <label className="container">
          <input
            type="checkbox"
            className="checkbox__input"
            checked={checked}
          />
        <span className="text-label">{title}</span>
        </label>
      </div>
    );
  }
}