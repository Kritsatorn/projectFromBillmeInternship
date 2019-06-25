import * as React from 'react';
import { CheckboxProps } from './CheckboxTypes';
import './Checkbox.css';

export class Checkbox
    extends React.Component<CheckboxProps> {

  render() {
    const{title, checked, onChange} = this.props;

    return (
      <div>
        <label className="container">
          <input
            type="checkbox"
            className="checkbox__input"
            checked={checked}
            onChange={e => onChange!(e.target.checked)}
          />
        <span className="text-label">{title}</span>
        </label>
      </div>
    );
  }
}