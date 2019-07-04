import * as React from 'react';
import { BankFacade } from '../../facades/BankFacade';
import { Bank } from '../../definitions/types/Banklist';
import { DropdownProps , DropdownState } from './DropdownTypes';
import './Dropdown.css';

export class Dropdown
  extends React.Component<DropdownProps, DropdownState> {

    constructor(props: DropdownProps) {
      super(props);

      this.state = {
        displayMenu: false,
        bankInfo: [],
        isPaymentSelected: false,
        selectedBank: {
          nameEng: '',
          nameTh: '',
          logo: '',
          format: ''
        }
      };

      const bankList = BankFacade.getBankList();

      bankList.then(result => {
        this.setState({
          bankInfo: result.bankList
        });
      });

      this.addListener = this.addListener.bind(this);
      this.removeListener = this.removeListener.bind(this);
      this.paymentSelected = this.paymentSelected.bind(this);
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    render() {
      const { title } = this.props;

      return (
        <div className="dropdown">
          <div
            className={this.selectStyle()}
            onClick={event => this.showDropdownMenu(event)}
          >
            {
              this.state.isPaymentSelected ?
              this.renderSelectedBank() :
              <div className="title__dropdown">{title}</div>
            }
            <div className="arrow-down"/>
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

      this.setState(
        {displayMenu: true},
        this.addListener
      );
    }

    hideDropdownMenu() {
      this.setState(
        {displayMenu: false},
        this.removeListener
      );
    }

    addListener() {
      document.addEventListener('click', this.hideDropdownMenu);
    }

    removeListener() {
      document.removeEventListener('click', this.hideDropdownMenu);
    }

    paymentSelected(result: Bank) {
      this.setState({
        isPaymentSelected: true,
        selectedBank: result
      });
      this.props.onChange(result);
    }

    renderDropdownBank(banklist: Bank[]) {
      return banklist.map((result, index) => {
        return(
          <div
            className="dropdown-container"
            key={`bank-${index}`}
            onClick={() => this.paymentSelected(result)}
          >
            <img
              className="bank__dropdown-image"
              src={result.logo}
              alt="image"
            />
            <div className="bank__dropdown-name">{this.fixName(result.nameTh)}</div>
          </div>
        );
      });
    }

    fixName(name: string) {
      if (name === 'ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย') {
        return 'ธนาคารพัฒนาวิสาหกิจแห่งประเทศไทย';
      } else {
        return name;
      }
    }

    selectStyle() {
      return 'button__dropdown';
    }

    renderSelectedBank() {
      return(
        <div className="dropdown-container">
            <img
              className="bank__dropdown-image"
              src={this.state.selectedBank.logo}
              alt="image"
            />
            <div className="bank__dropdown-name">{this.state.selectedBank.nameTh}</div>
          </div>
      );
    }
}
