import * as React from 'react';
import { Button } from '../../components/Button/Button';
import { Stepper } from '../../components/Stepper/Stepper';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { TextField } from '../../components/TextField/TextField';
import { BillingStep } from '../../definitions/enum/BillingStep';
import { SelectFriendState, Friend } from './SelectFriendPageTypes';
import './SelectFriendPage.css';

export class SelectFriendPage
  extends React.Component<{}, SelectFriendState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      billName: '',
      friends: [
        {
          // tslint:disable-next-line:max-line-length
          profilePic: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/40508783_2026063030794428_4624439051934498816_n.jpg?_nc_cat=105&_nc_oc=AQnYNi1q0KZRmV8OeCscE00wvvILORWTmbPRoIryBuNZzz5KAS2Grg2vs54n1SXekxY&_nc_ht=scontent.fbkk5-3.fna&oh=5f7f21d5822792a24e18587d170f7f61&oe=5DBF440E',
          displayName: 'RawitSHIE',
          isSelect: false,
        },
        {
          // tslint:disable-next-line:max-line-length
          profilePic: 'https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/51525870_2817630218254708_3288520093335552000_o.jpg?_nc_cat=100&_nc_oc=AQkhd9_gpnjlUv_JQyo2DoqhANfkC5LP3skzCBaycfIHfCtZvYQAmMpYm1dX_ZFphHU&_nc_ht=scontent.fbkk5-5.fna&oh=76ef2ffb5147337a0eadb8095a80d315&oe=5D843F39',
          displayName: 'Wiput',
          isSelect: false,
        },
        {
          // tslint:disable-next-line:max-line-length
          profilePic: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/40508783_2026063030794428_4624439051934498816_n.jpg?_nc_cat=105&_nc_oc=AQnYNi1q0KZRmV8OeCscE00wvvILORWTmbPRoIryBuNZzz5KAS2Grg2vs54n1SXekxY&_nc_ht=scontent.fbkk5-3.fna&oh=5f7f21d5822792a24e18587d170f7f61&oe=5DBF440E',
          displayName: 'RawitSHIE',
          isSelect: false,
        },
        {
          // tslint:disable-next-line:max-line-length
          profilePic: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/40508783_2026063030794428_4624439051934498816_n.jpg?_nc_cat=105&_nc_oc=AQnYNi1q0KZRmV8OeCscE00wvvILORWTmbPRoIryBuNZzz5KAS2Grg2vs54n1SXekxY&_nc_ht=scontent.fbkk5-3.fna&oh=5f7f21d5822792a24e18587d170f7f61&oe=5DBF440E',
          displayName: 'RawitSHIE',
          isSelect: false,
        },
        {
          // tslint:disable-next-line:max-line-length
          profilePic: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/40508783_2026063030794428_4624439051934498816_n.jpg?_nc_cat=105&_nc_oc=AQnYNi1q0KZRmV8OeCscE00wvvILORWTmbPRoIryBuNZzz5KAS2Grg2vs54n1SXekxY&_nc_ht=scontent.fbkk5-3.fna&oh=5f7f21d5822792a24e18587d170f7f61&oe=5DBF440E',
          displayName: 'RawitSHIE',
          isSelect: false,
        },
        {
          // tslint:disable-next-line:max-line-length
          profilePic: 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/40508783_2026063030794428_4624439051934498816_n.jpg?_nc_cat=105&_nc_oc=AQnYNi1q0KZRmV8OeCscE00wvvILORWTmbPRoIryBuNZzz5KAS2Grg2vs54n1SXekxY&_nc_ht=scontent.fbkk5-3.fna&oh=5f7f21d5822792a24e18587d170f7f61&oe=5DBF440E',
          displayName: 'RawitSHIE',
          isSelect: false,
        }
      ],
      selectedFriend: 0,
      totalBillPrice: 0
    };
  }

  render() {
    return (
      <div className="background">
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
        <div className="friend-box">
          <div className="friend-top-row">
            <div className="friend__column-title column-left">
              ใครอยู่ในบิลนี้บ้าง ?
            </div>
            <div className="friend__column-right">
              <div className="all-button">
                <Button
                  title="All"
                  type=""
                  disable={false}
                />
              </div>
              <div className="select-number">
                {this.state.selectedFriend}
              </div>
            </div>
          </div>
          <div className="friend-list">
            {this.mappingItems()}
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
      <div key={index} className="friend-list__row">
        <img className="profile-picture" src={item.profilePic} alt={item.displayName + 'picture'} />
        <div className="name-box">
          <div className="display-name">
            {item.displayName}
          </div>
          <div>
            <Checkbox
              title=""
            />
          </div>
        </div>
      </div>
    );
  }
}