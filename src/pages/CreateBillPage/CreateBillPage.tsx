import * as React from 'react';
import { Button } from '../../components/Button/Button';
import { Stepper } from '../../components/Stepper/Stepper';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { TextField } from '../../components/TextField/TextField';
import { BillingStep } from '../../definitions/enum/BillingStep';
import './CreateBillPage.css';

export class CreateBillPage
  extends React.Component {

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
          <div className="row">
            <div className="column-left">
              <TextField
                name="food"
                placeHolder="รายการ"
                id="2"
                type="text"
              />
            </div>
            <div className="column-right">
              <TextField
                name="price"
                placeHolder="0.0"
                id="2"
                type="number"
              />
            </div>
            <button
              className="cancel-button"
              disabled={false}
            >
              X
            </button>
          </div>
          <div className="add-button-size">
            <Button
              title="เพิ่มรายการในบิล"
              type="addlist"
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
        <div>
          <Button
            title="ถัดไป"
            type=""
            disable={false}
          />
        </div>
      </div>
    );
  }
}