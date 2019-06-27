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

  private static ownerSymbol = require('../../assets/crown.png');

  constructor(props: {}) {
    super(props);

    // tslint:disable-next-line:no-console
    window.onpopstate = (event) => console.log(event.state);

    this.state = {
      billName: '',
      items: [
        {
          detail: '',
          price: 0
        }
      ],
      vat: 7,
      vatStatus: false,
      vatPrice: 0,
      serviceCharge: 10,
      serviceChargePrice: 0,
      serviceChargeStatus: false,
      totalPrice: 0,
      totalBillPrice: 0,
      friends: [
        {
          profilePic: 'https://bit.ly/2FwSc4j',
          displayName: 'RawitSHIE',
          isSelect: true,
          owner: true
        },
        {
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'Wiput',
          isSelect: false,
          owner: false
        },
        {
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'RawitSHIE',
          isSelect: false,
          owner: false
        },
        {
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'RawitSHIE',
          isSelect: false,
          owner: false
        },
        {
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'RawitSHIE',
          isSelect: false,
          owner: false
        },
        {
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'RawitSHIE',
          isSelect: false,
          owner: false
        }
      ],
      selectedFriendList: [],
      selectedFriend: 1,
    };
  }

  componentDidMount() {
    const { billName, totalPrice,
      vat, vatStatus, vatPrice,
      serviceCharge, serviceChargeStatus, serviceChargePrice,
      totalBillPrice } = history.state;

    this.setState({
        billName,
        totalPrice,
        vat,
        vatStatus,
        vatPrice,
        serviceCharge,
        serviceChargeStatus,
        serviceChargePrice,
        totalBillPrice
    });
  }

  render() {
    return (
      <div className="background">
        <div className="top-stepper">
          <Stepper
            step={BillingStep.ADD_FRIENDS}
            step1=" ใส่รายการ "
            step2=" เลือกเพื่อน "
            step3="เรียกเก็บเงิน"
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
              onChange={(event) => this.updateBillName(event)}
              value={this.state.billName}
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
                  disable={this.state.selectedFriend === this.state.friends.length}
                  onclick={() => this.selectAll()}
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
                onclick={
                  () => {
                    history.pushState(this.stateInfomation(), '', '/summary');
                    history.go();
                  }
                }
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

  listItemRow(index: number, friend: Friend) {
    return (
      <div key={index} className={this.selectClass(friend.isSelect)}>
        <div className="profile-picture-div">
          <img className="profile-picture" src={friend.profilePic} alt={friend.displayName + 'picture'} />
        </div>
        <div className="name-box">
          <div className="display-name">
            {friend.displayName}
          </div>
          <div>
            {
              friend.owner ?
                (
                  <div>
                    <img
                      className="owner-symbol"
                      src={SelectFriendPage.ownerSymbol}
                      alt="owner"
                    />
                  </div>
                ) :
                (
                  <Checkbox
                    title=""
                    checked={friend.isSelect}
                    onChange={(checked) => {
                      friend.isSelect = checked;
                      let friends = this.state.friends;
                      friends[index] = friend;
                      const { selectedFriend, selectedFriendList } = this.updateSelected();
                      this.setState({
                        friends,
                        selectedFriend,
                        selectedFriendList
                      });
                    }}
                  />
                )
            }
          </div>
        </div>
      </div>
    );
  }

  updateBillName(event: React.ChangeEvent<HTMLInputElement>) {
    const billName = event.target.value;

    this.setState({
      billName
    });
  }

  updateSelected() {
    const friends = this.state.friends;
    const selectedFriendList = friends.filter((friend) => friend.isSelect);
    const selectedFriend = selectedFriendList.length;

    return { selectedFriend, selectedFriendList };
  }

  selectAll() {
    let friends = this.state.friends;

    friends.forEach((friend) => {
      friend.isSelect = true;
    });

    this.setState({
      friends,
      selectedFriend: friends.length,
      selectedFriendList: friends
    });
  }

  selectClass(checked: boolean) {
    return checked ? 'friend-list__row selected' : 'friend-list__row';
  }

  stateInfomation() {
   const state = {
    billName: this.state.billName,
    selectedFriendList: this.state.selectedFriendList,
    items: this.state.items,
    vat: this.state.vat,
    vatStatus: this.state.vatStatus,
    vatPrice: this.state.vatPrice,
    serviceCharge: this.state.serviceCharge,
    serviceChargeStatus: this.state.serviceChargeStatus,
    serviceChargePrice: this.state.serviceChargePrice,
    totalPrice: this.state.totalPrice,
    totalBillPrice: this.state.totalBillPrice
   };
   return state;
  }

}