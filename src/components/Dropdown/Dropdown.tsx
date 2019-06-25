import * as React from 'react';
import { BankFacade } from '../../facades/BankFacade';
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

      const bankList = BankFacade.getBankList();

      bankList.then(result => {
        this.setState({
          bankInfo: result.bankList
        });
      });

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
            this.renderDropdownBank(this.state.bankInfo)
            ) : (null)
          }
        </div>
      );
    }

    renderDropdownBank(
      data2: {
        name?: string;
        logo?: string;
      }[]
    ) {
      return data2.map((result, index) => {
        return(
          <div key={`bank-${index}`}>
            <img
              className="bank__image"
              src={result.logo}
              alt=""
            />
            <div className="bank__name">{result.name}</div>
          </div>
        );
      });
    }
}
