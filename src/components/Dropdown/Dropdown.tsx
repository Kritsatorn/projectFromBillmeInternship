import * as React from 'react';
import { DropdownProps , DropdownState } from './DropdownTypes';
import './Dropdown.css';

export class Dropdown
  extends React.Component<DropdownProps , DropdownState> {

    constructor(props: DropdownProps) {
      super(props);

      this.state = {
        displayMenu: false,
        bankInfo: []
      };

      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event: React.MouseEvent<HTMLDivElement> ) {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
      });
    }

    hideDropdownMenu() {
      this.setState({ displayMenu: false }, () => {
        document.removeEventListener('click', this.hideDropdownMenu);
      });
    }

    render() {
      const { title } = this.props;
      return (
        <div className="dropdown">
          <div
            className="button"
            onClick={event => this.showDropdownMenu(event)}
          >
            {title}
          </div>
          { this.state.displayMenu ? (
            <ul>
              <li>Test1</li>
              <li>Test2</li>
              <li>Test3</li>
              <li>Test4</li>
              <li>Test5</li>
            </ul>
            ) : (null)
          }
        </div>
      );
    }
}
