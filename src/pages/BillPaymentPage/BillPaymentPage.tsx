import * as React from 'react';
import { Button } from '../../components/Button/Button';
import { Stepper } from '../../components/Stepper/Stepper';
import { BillPaymentState, Card } from './BillPaymentTypes';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { BillingStep } from '../../definitions/enum/BillingStep';
import { TextField } from '../../components/TextField/TextField';
import './BillPaymentPage.css';

export class BillPaymentPage
  extends React.Component<object, BillPaymentState> {

  box: HTMLElement | null;

  constructor(props: {}) {
    super(props);

    this.state = {
      cards: [
        {
          bank: '',
          value: ''
        }
      ],
      boxHeight: 240
    };

    this.handleBankChange = this.handleBankChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', (e) => this.setState({
      boxHeight: this.box!.clientHeight
    }));
  }

  componentWillUnmount() {
    window.removeEventListener('load', () => null);
  }

  render() {
    return (
      <div className="body">
        <div className="content">
          <div className="top-stepper">
            <Stepper
              step={BillingStep.PAYMENTS}
              step1="ใส่รายการ"
              step2="เลือกเพื่อน"
              step3="เรียกเก็บเงิน"
            />
          </div>
          <div className="payment__feild" ref={e => this.box = e}>
            <div className="title">ช่องทางการชำระเงิน</div>
            {this.mappingPaymentCard()}
            <button
              className="payment__card add"
              onClick={() => this.addCard()}
            >
              +
            </button>
          </div>
          <div className="auto-adjust" style={{height: `Calc(100% - ${this.state.boxHeight + 75}px)`}}>
            <div className="payment__footer">
              <Button
                title="เรียบร้อย"
                type=""
                disable={false}
                onClick={() => {
                  let state = history.state;
                  history.pushState(state, '', '/summary');
                  history.go();
                  // tslint:disable-next-line:no-console
                  console.log(state);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderPaymentField(index: number, cards: Card) {
    return (
      <div key={index} className="payment__card">
        <div className="drop__card" style={{zIndex: 100 - index}}>
          <Dropdown
            title="เลือก . . ."
            onChange={(text) => {
              this.handleBankChange(text, index);
            }}
          />
        </div>
        <div className="bank-number">
          <TextField
            name="bank-number"
            id={`bank-number__${index}`}
            value={cards.value}
            isUnderline={true}
            onChange={(event) => {
              this.handleValueChange(
                this.formatValue(event.target.value, cards.bank),
                index
              );
            }}
          />
        </div>
        <button
          className="cancel-button"
          onClick={() => {
            this.removeCard(index);
          }}
        >
          x
        </button>
      </div>
    );
  }

  removeCard(index: number) {
    const cards = this.state.cards;

    cards.splice(index, 1);

    this.setState({
      cards
    });
  }

  formatValue(value: string, type: string) {
    var i , j;
    var text =  '';
    var format = '';
    if (type === 'พร้อมเพย์ - หมายเลขโทรศัพท์มือถือ') {
      format = 'xxx-xxx-xxxx';
    } else if (type === 'พร้อมเพย์ - รหัสบัตรประชาชน') {
      format = 'x-xxxx-xxxxx-xx-x';
    } else {
      format = 'xxx-x-xxxxx-x';
    }
    for (i = 0, j = 0; i < value.length; i++) {
      if (format[j] === 'x') {
        if ((value[i].charCodeAt(0) >= '0'.charCodeAt(0)) && (value[i].charCodeAt(0) <= '9'.charCodeAt(0))) {
          text += value[i];
          j += 1;
        }
      } else if (format[j] === '-') {
        text += '-';
        j += 1;
        i -= 1;
      }
    }
    return text;
  }

  handleValueChange(text: string, index: number) {
    const cards = this.state.cards;

    cards[index].value = text;

    this.setState({
      cards
    });
  }

  handleBankChange(text: string, index: number) {
    const cards = this.state.cards;

    cards[index].bank = text;

    this.setState({
      cards
    });
  }

  addCard() {
    const cards = this.state.cards;

    cards.push({
      bank: '',
      value: ''
    });

    this.setState({
      cards
    });
  }

  mappingPaymentCard() {
    return (
      this.state.cards.map(
        (cards, index) => {
          return this.renderPaymentField(index, cards);
        }
      )
    );
  }
}