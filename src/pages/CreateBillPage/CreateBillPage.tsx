import * as React from 'react';
import { Button } from '../../components/Button/Button';
import { Stepper } from '../../components/Stepper/Stepper';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { CreateBillState, Item } from './CreateBillPageTypes';
import { TextField } from '../../components/TextField/TextField';
import { BillingStep } from '../../definitions/enum/BillingStep';
import './CreateBillPage.css';

export class CreateBillPage
  extends React.Component<{}, CreateBillState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      items: [
        {
          detail: '',
          price: 0
        }
      ],
      billName: '',
      vat: 7,
      vatStatus: false,
      vatPrice: 0,
      serviceCharge: 10,
      serviceChargePrice: 0,
      serviceChargeStatus: false,
      totalPrice: 0,
      totalBillPrice: 0,
    };

    this.addList = this.addList.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
  }

  render() {
    return (
      <div className="bg">
        <div className="top-stepper">
          <Stepper
            step={BillingStep.CREATE_BILL}
            step1="ใส่รายการ"
            step2="เลือกเพื่อน"
            step3="ช่องทางการชำระเงิน"
          />
        </div>
        <div className="bill-title">
          <div className="bill-title-size">
            <TextField
              name="ใส่ชื่อบิล"
              placeHolder="ใส่ชื่อบิล"
              id="1"
              type=""
              shadow={true}
              value={this.state.billName}
              onChange={(event => this.updateBillName(event))}
            />
          </div>
        </div>
        <div className="bill-box">
          <div className="top-row">
            <div className="column-title column-left row">
              รายการ
            </div>
            <div className="column-title column-right row">
              ราคา
            </div>
            <div style={{ width: '28px' }} />
          </div>
          {this.mappingItems()}
          <div className="add-button-size">
            <Button
              title="+ เพิ่มรายการในบิล"
              type="addlist"
              onclick={() => this.addList()}
              disable={false}
            />
          </div>
        </div>
        <div className="optional">
          <div className="optional__row">
            <div className="checkbox-list">
              <Checkbox
                title="VAT"
                onChange={(checked) => {
                  this.setState({
                    vatStatus: checked,
                    totalBillPrice: this.calculateTotalBillPrice(checked, this.state.serviceChargeStatus)
                  });
                }}
              />
            </div>
            <div>
              {this.state.vatStatus ? (this.state.vatPrice).toFixed(2) : ''}
            </div>
          </div>
          <div className="optional__row">
            <div className="checkbox-list">
              <Checkbox
                title="Service Charge"
                checked={this.state.serviceChargeStatus}
                onChange={(checked) => {
                  this.setState({
                    serviceChargeStatus: checked,
                    totalBillPrice:
                      this.calculateTotalBillPrice(
                        this.state.vatStatus,
                        checked,
                        this.state.serviceCharge
                      )
                  });
                }}
              />
              <div className="service-charge-textfield">
                <TextField
                  name="serviceCharge"
                  id="2"
                  type="number"
                  isUnderline={true}
                  onChange={(event) => this.updateService(event)}
                  value={this.state.serviceCharge ? this.state.serviceCharge : ''}
                />
              </div>
              <div>
                %
              </div>
            </div>
            <div>
              {this.state.serviceChargeStatus ? (this.state.serviceChargePrice).toFixed(2) : ''}
            </div>
          </div>
        </div>
        <div className="summary-section">
          <div className="summary-section__row">
            <div className="summary-section__text">
              ยอดรวม
              <span className="summary-section__text--price">
                {(this.state.totalBillPrice).toFixed(2)}
              </span>
              บาท
            </div>
          </div>
          <div className="summary-section__row">
            <div className="next-button-size">
              <Button
                title="ถัดไป"
                type=""
                disable={this.state.totalBillPrice === 0 ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  mappingItems() {
    return (
      this.state.items.map(
        (item, index) => {
          return this.listItemRow(index, item);
        }
      )
    );
  }

  listItemRow(index: number, item: Item) {
    return (
      <div key={index} className="row">
        <div className="column-left">
          <TextField
            name={index + 'detail'}
            placeHolder="รายการ"
            id={index + 'detail'}
            type="text"
            value={item.detail}
            onChange={(event) => {
              this.updateDetail(event, index);
            }}
          />
        </div>
        <div className="column-right">
          <TextField
            name={index + 'price'}
            placeHolder="0.0"
            id={index + 'price'}
            type="number"
            value={item.price ? item.price : ''}
            onChange={(event) => {
              this.updatePrice(event, index);
            }}
          />
        </div>
        {
          // TODO: X represent remove icon for remove button will change later
        }
        <button
          className="cancel-button"
          disabled={false}
          onClick={() => {
            this.removeItemRow(index);
          }}
        >
          x
        </button>
      </div>
    );
  }

  addList() {
    const items = this.state.items;

    items.push({
      detail: '',
      price: 0
    });

    this.setState({
      items
    });
  }

  removeItemRow(index: number) {
    const items = this.state.items;

    items.splice(index, 1);

    this.setState({
      items,
      totalBillPrice: this.calculateTotalBillPrice(this.state.vatStatus, this.state.serviceChargeStatus)
    });
  }

  updateBillName(event: React.ChangeEvent<HTMLInputElement>) {
    const billName = event.target.value;

    this.setState({
      billName
    });
  }

  updateDetail(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const text = event.target.value;
    const items = this.state.items;
    const item = this.state.items[index];

    item.detail = text;
    items[index] = item;

    this.setState({
      items,
      totalBillPrice: this.calculateTotalBillPrice(this.state.vatStatus, this.state.serviceChargeStatus)
    });
  }

  updatePrice(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const price = Number(event.target.value);
    const items = this.state.items;
    const item = this.state.items[index];

    item.price = price;
    items[index] = item;

    this.setState({
      items,
      totalBillPrice: this.calculateTotalBillPrice(this.state.vatStatus, this.state.serviceChargeStatus)
    });
  }

  calculateTotalPrice() {
    let totalPrice = this.state.items
      .map((item) => item.price)
      .reduce((itemPrice, total) => itemPrice + total);

    this.setState({
      totalPrice
    });

    return totalPrice;
  }

  calculateServiceCharge(serviceCharge: boolean, totalPrice: number, serviceChargeAmount?: number) {
    const amount = serviceChargeAmount ? serviceChargeAmount : this.state.serviceCharge;
    const decimalDigits = serviceCharge ? totalPrice * (amount / 100) : 0;

    this.setState({
      serviceChargePrice: Number(decimalDigits.toFixed(2))
    });

    return Number(decimalDigits.toFixed(2));
  }

  updateService(event: React.ChangeEvent<HTMLInputElement>) {
    let serviceCharge = Number(event.target.value);

    this.setState({
      serviceCharge,
      totalBillPrice: this.calculateTotalBillPrice(this.state.vatStatus, this.state.serviceChargeStatus, serviceCharge)
    });
  }

  calculateTotalBillPrice(vat: boolean, serviceCharge: boolean, serviceChargeAmount?: number) {
    const totalPrice = this.calculateTotalPrice();
    const vatPrice = (totalPrice
      + this.calculateServiceCharge(serviceCharge, totalPrice, serviceChargeAmount))
      * (vat ? (this.state.vat / 100) : 0);

    this.setState({
      vatPrice
    });

    return totalPrice + vatPrice + this.calculateServiceCharge(serviceCharge, totalPrice, serviceChargeAmount);
  }
}