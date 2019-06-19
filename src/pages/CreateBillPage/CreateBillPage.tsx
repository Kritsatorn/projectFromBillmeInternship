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
      <div className="Bg">
        <div className="Top-stepper">
          <Stepper
            status="2"
            title1="ใส่รายการ"
            title2="เลือกเพื่อน"
            title3="ช่องทางการชำระเงิน"
          />
        </div>
        <div className="Bill-title">
          <div className="Bill-title-size">
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
        <div className="Bill-box">
          <div className="Top-row">
            <div className="Column-title Column-left row">
              รายการ
            </div>
            <div className="Column-title Column-right row">
              ราคา
            </div>
            <div style={{ width: '28px' }} />
          </div>
          <div className="row">
            <div className="Column-left">
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
            <div className="Column-right">
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
              className="Cancel-button"
              disabled={false}
            >
              X
            </button>
          </div>
          <div className="Add-button-size">
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