import * as React from 'react';
import { CreateBillState } from './CreateBillPageTypes';
import { Button } from '../../components/Button/Button';
import { Stepper } from '../../components/Stepper/Stepper';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { TextField } from '../../components/TextField/TextField';
import { BillingStep } from '../../definitions/enum/BillingStep';
import './CreateBillPage.css';

export class CreateBillPage
  extends React.Component<{}, CreateBillState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      items: [],
      totalprice: 107.1
    };
    this.addList = this.addList.bind(this);
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
            {
              this.state.items.map(
                (item, index) => {
                  return (
                    <div key={index} className="row">
                      <div className="column-left">
                        <TextField
                          name={index + 'detail'}
                          placeHolder="รายการ"
                          id={index + 'detail'}
                          type="text"
                        />
                      </div>
                      <div className="column-right">
                        <TextField
                          name={index + 'price'}
                          placeHolder="0.0"
                          id={index + 'price'}
                          type="number"
                        />
                      </div>
                      <button
                        className="cancel-button"
                        disabled={false}
                      >
                        x
                      </button>
                    </div>
                  );
                }
              )
            }
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
                {this.state.totalprice}
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

  addList() {
    const item = this.state.items;
    item.push({
      detail: '',
      price: 0
    });
    this.setState({ items: item });
  }
}