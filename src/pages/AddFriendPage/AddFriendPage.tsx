import * as React from 'react';
import { Button } from '../../components/Button/Button';
import { Stepper } from '../../components/Stepper/Stepper';
import { AddFriendState, Friend } from './AddFriendPageTypes';
import { TextField } from '../../components/TextField/TextField';
import { BillingStep } from '../../definitions/enum/BillingStep';
import './AddFriendPage.css';

export class AddFriendPage
  extends React.Component<{}, AddFriendState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      billName: '',
      friends: [
        {
          profilePic: '',
          displayName: '',
          isSelect: false,
        }
      ],
      selectedFriend: 0,
      totalBillPrice: 0
    };
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
              ใครอยู่ในบิลนี้บ้าง ?
            </div>
            <div style={{ width: '28px' }} />
          </div>
          {this.mappingItems()}
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
      this.state.friends.map(
        (item, index) => {
          return this.listItemRow(index, item);
        }
      )
    );
  }

  listItemRow(index: number, item: Friend) {
    return (
      <div key={index} className="row">
        <div className="column-left">
          Firends
        </div>
        <div className="column-right">
          friend
        </div>
        {
          // TODO: X represent remove icon for remove button will change later
        }
      </div>
    );
  }
}