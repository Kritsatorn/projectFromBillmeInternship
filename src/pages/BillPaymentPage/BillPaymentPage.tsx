import * as React from 'react';
import { Button } from '../../components/Button/Button';
import { Bank } from '../../definitions/types/Banklist';
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

    window.onpopstate = () => {
      history.pushState(this.stateInfomation(), '', '/select');
      history.go();
    };

    this.state = {
      previousState: {
        billName: '',
        userId: '',
        groupId: '',
        items: [],
        vat: 7,
        vatStatus: false,
        vatPrice: 0,
        serviceCharge: 10,
        serviceChargePrice: 0,
        serviceChargeStatus: false,
        totalPrice: 0,
        totalBillPrice: 0,
        friends: [],
        selectedFriendList: [],
        selectedFriend: 1,
      },
      paymentList: [
        {
          nameEng: '',
          nameTh: '',
          logo: '',
          format: '',
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

    if (history.state !== null) {
      const { billName, selectedFriendList, userId, groupId,
        totalPrice, items,
        vat, vatStatus, vatPrice,
        serviceCharge, serviceChargeStatus, serviceChargePrice,
        totalBillPrice } = history.state;

      const previousState = this.state.previousState;

      previousState.billName = billName,
      previousState.userId = userId,
      previousState.groupId = groupId,
      previousState.selectedFriendList = selectedFriendList,
      previousState.totalPrice = totalPrice,
      previousState.items = items,
      previousState.vat = vat,
      previousState.vatStatus = vatStatus,
      previousState.vatPrice = vatPrice,
      previousState.serviceCharge = serviceCharge,
      previousState.serviceChargeStatus = serviceChargeStatus,
      previousState.serviceChargePrice = serviceChargePrice,
      previousState.totalBillPrice = totalBillPrice;

      this.setState({previousState});
    }
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
                  history.pushState(this.stateInfomation(), '', '/summary');
                  history.go();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  stateInfomation() {
    const state = {
      billName: this.state.previousState.billName,
      userId: this.state.previousState.userId,
      groupId: this.state.previousState.groupId,
      selectedFriendList: this.state.previousState.selectedFriendList,
      items: this.state.previousState.items,
      vat: this.state.previousState.vat,
      vatStatus: this.state.previousState.vatStatus,
      vatPrice: this.state.previousState.vatPrice,
      serviceCharge: this.state.previousState.serviceCharge,
      serviceChargeStatus: this.state.previousState.serviceChargeStatus,
      serviceChargePrice: this.state.previousState.serviceChargePrice,
      totalPrice: this.state.previousState.totalPrice,
      totalBillPrice: this.state.previousState.totalBillPrice,
      paymentList: this.state.paymentList
    };

    return state;
  }
  renderPaymentField(index: number, cards: Card) {
    return (
      <div key={index} className="payment__card">
        <div className="drop__card" style={{zIndex: 100 - index}}>
          <Dropdown
            title="เลือก . . ."
            onChange={(bank) => {
              this.handleBankChange(bank, index);
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
                this.formatValue(event.target.value, cards.nameTh),
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
    const cards = this.state.paymentList;

    cards.splice(index, 1);

    this.setState({
      paymentList: cards
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
    const cards = this.state.paymentList;

    cards[index].value = text;

    this.setState({
      paymentList: cards
    });
  }

  handleBankChange(bank: Bank, index: number) {
    const cards = this.state.paymentList;

    cards[index].nameTh = bank.nameTh;
    cards[index].nameEng = bank.nameEng;
    cards[index].logo = bank.logo;
    cards[index].format = bank.format;
    cards[index].value = '';

    this.setState({
      paymentList: cards
    });
  }

  addCard() {
    const cards = this.state.paymentList;

    cards.push({
      nameEng: '',
      nameTh: '',
      logo: '',
      format: '',
      value: ''
    });

    this.setState({
      paymentList: cards
    });
  }

  mappingPaymentCard() {
    return (
      this.state.paymentList.map(
        (cards, index) => {
          return this.renderPaymentField(index, cards);
        }
      )
    );
  }
}