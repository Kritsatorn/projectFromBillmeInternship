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
      totalPrice: 0,
      vat: false,
      serviceCharge: false,
    };

    this.addList = this.addList.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
  }

  render() {
    return (
      <div className="bg">
        <div className="top-stepper">
          <Stepper
            step={BillingStep.ADD_FRIENDS}
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
            <Checkbox
              title="VAT"
            />
          </div>
          <div className="optional__row">
            <Checkbox
              title="Service Charge"
            />
            <div className="service-charge-textfield">
              <TextField
                name="servicecharge"
                id="2"
                type="number"
                isunderline={true}
              />
            </div>
            <div>
              %
            </div>
          </div>
        </div>
        <div className="summary-section">
          <div className="summary-section__row">
            <div className="summary-section__text">
              ยอดรวม
              <span className="summary-section__text--price">
                {this.state.totalPrice}
              </span>
              บาท
            </div>
          </div>
          <div className="summary-section__row">
            <div className="next-button-size">
              <Button
                title="ถัดไป"
                type=""
                disable={false}
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
      items
    });
    this.updateTotalprice();
  }

  updateDetail(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const text = event.target.value;
    const items = this.state.items;
    const item = this.state.items[index];

    item.detail = text;
    items[index] = item;

    this.setState({
      items
    });
  }

  updatePrice(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const price = Number(event.target.value);
    const items = this.state.items;
    const item = this.state.items[index];

    item.price = price;
    items[index] = item;

    this.setState({
      items
    });
    this.updateTotalprice();
  }

  updateTotalprice() {
    let totalPrice = 0;
    this.state.items.forEach((item) => {
      totalPrice += item.price;
    });
    totalPrice *= this.state.vat ? 1.07 : 1;
    this.setState({
      totalPrice
    });
  }
}