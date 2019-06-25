import * as React from 'react';
import { BankFacade } from '../../facades/BankFacade';
import { DropdownProps , DropdownState } from './DropdownTypes';
import './Dropdown.css';

export class Dropdown
  extends React.Component<DropdownProps, DropdownState> {

    constructor(props: DropdownProps) {
      super(props);

      this.state = {
        displayMenu: false,
        bankInfo: [],
        paymentIsSelected: false,
        selectedName: '',
        selectedLogo: ''
      };

      const bankList = BankFacade.getBankList();

      bankList.then(result => {
        this.setState({
          bankInfo: result.bankList
        });
      });

      this.paymentSelected = this.paymentSelected.bind(this);
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    render() {
      const { title } = this.props;

      return (
        <div className="dropdown">
          <div
            className={this.selectStyle(this.state.displayMenu)}
            onClick={event => this.showDropdownMenu(event)}
          >
          {
            this.state.paymentIsSelected ?
            this.render1bank() :
            <div className="titleDropdown">{title}</div>
          }
          </div>
          {
            this.state.displayMenu ?
            this.renderDropdownBank(this.state.bankInfo) :
            null
          }
        </div>
      );
    }

    showDropdownMenu(event: React.MouseEvent<HTMLDivElement>) {
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

    paymentSelected(name?: string, logo?: string) {
      this.setState({
        paymentIsSelected: true,
        selectedName: name,
        selectedLogo: logo
      });
    }

    renderDropdownBank(
      banklist: {
        name?: string;
        logo?: string;
      }[]
    ) {
      return banklist.map((result, index) => {
        return(
          <div
            className="dropdown-container"
            key={`bank-${index}`}
            onClick={
              () => this.paymentSelected(
                result.name,
                result.logo
              )
            }
          >
            <img
              className="bankDropdown__image"
              src={result.logo}
              alt=""
            />
            <div className="bankDropdown__name">{result.name}</div>
          </div>
        );
      });
    }

    selectStyle(displayMenu?: boolean) {
      return displayMenu ? 'buttonDropdownClicked' : 'buttonDropdown';
    }

    render1bank() {
      return(
        <div className="dropdown-container">
            <img
              className="bankDropdown__image"
              src={this.state.selectedLogo}
              alt=""
            />
            <div className="bankDropdown__name">{this.state.selectedName}</div>
          </div>
      );
    }
}
