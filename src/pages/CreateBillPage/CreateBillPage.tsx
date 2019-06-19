import * as React from 'react';
import { Button } from '../../components/Button/Button';
import { Stepper } from '../../components/Stepper/Stepper';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { TextField } from '../../components/TextField/TextField';
import './CreateBillPage.css';

export class CreateBillPage
  extends React.Component<{}, {}> {

  render() {
    return (
      <div className="bg">
        <div className="top-stepper">
          <Stepper
            status="2"
            title1="ใส่รายการ"
            title2="เลือกเพื่อน"
            title3="ช่องทางการชำระเงิน"
          />
        </div>
        <div className="bill-title">
          <div className="bill-title-size">
            <TextField
              name="ใส่ชื่อบิล"
              placeHolder="ใส่ชื่อบิล"
              id="1"
              type=""
              className=""
              required={false}
              disabled={false}
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
                type=""
                className=""
                required={false}
                disabled={false}
              />
            </div>
            <div className="column-right">
              <TextField
                name="food"
                placeHolder="0.0"
                id="2"
                type=""
                className=""
                required={false}
                disabled={false}
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
        <Checkbox
          title="VAT"
        />
        <Checkbox
          title="Service Charge"
        />
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