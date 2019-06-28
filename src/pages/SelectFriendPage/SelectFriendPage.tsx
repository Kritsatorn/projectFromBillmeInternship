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

  box: HTMLElement | null;

  constructor(props: {}) {
    super(props);

    window.onpopstate = () => {
      history.pushState(this.stateInfomation(), '', '/create');
      history.go();
    };

    this.state = {
      billName: '',
      items: [],
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
          userId: '1',
          profilePic: 'https://bit.ly/2FwSc4j',
          displayName: 'RawitSHIE',
          isSelect: true,
          owner: true
        },
        {
          userId: '2',
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'Wiput',
          isSelect: false,
          owner: false
        },
        {
          userId: '3',
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'RawitSHIE',
          isSelect: false,
          owner: false
        },
        {
          userId: '4',
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'RawitSHIE',
          isSelect: false,
          owner: false
        },
        {
          userId: '5',
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'RawitSHIE',
          isSelect: false,
          owner: false
        },
        {
          userId: '6',
          profilePic: 'https://bit.ly/2J9C0Hv',
          displayName: 'RawitSHIE',
          isSelect: false,
          owner: false
        }
      ],
      selectedFriendList: [],
      selectedFriend: 1,
      boxHeight: 240
    };
  }

  componentDidMount() {
    if (history.state !== null) {
      const { billName, selectedFriendList,
        totalPrice, items,
        vat, vatStatus, vatPrice,
        serviceCharge, serviceChargeStatus, serviceChargePrice,
        totalBillPrice } = history.state;

      window.addEventListener('load', (e) => this.setState({ boxHeight: this.box!.clientHeight }));

      this.setState({
        billName,
        totalPrice,
        items,
        vat,
        vatStatus,
        vatPrice,
        serviceCharge,
        serviceChargeStatus,
        serviceChargePrice,
        totalBillPrice,
        selectedFriendList: selectedFriendList === null ? [] : this.addIsSelect(selectedFriendList),
        friends: this.mapFriends(selectedFriendList)
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('load', () => null);
  }

  render() {
    return (
      <div className="background">
        <div className="content">
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
          <div className="friend-box" ref={e => this.box = e}>
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
                    onClick={() => this.selectAll()}
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
          <div className="auto-adjust" style={{ height: `Calc(100% - ${this.state.boxHeight + 193 - 63}px)` }}>
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
                    onClick={
                      () => {
                        history.pushState(this.stateInfomation(), '', '/payment');
                        history.go();
                      }
                    }
                  />
                </div>
              </div>
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
      selectedFriendList: this.removeIsSelect(this.state.selectedFriendList),
      items: this.state.items,
      vat: this.state.vat,
      vatStatus: this.state.vatStatus,
      vatPrice: this.state.vatPrice,
      serviceCharge: this.state.serviceCharge,
      serviceChargeStatus: this.state.serviceChargeStatus,
      serviceChargePrice: this.state.serviceChargePrice,
      totalPrice: this.state.totalPrice,
      totalBillPrice: this.state.totalBillPrice,
    };

    return state;
  }

  removeIsSelect(friends: Friend[]) {
    return friends.map(friend => {
      const newFriend = {
        userId: friend.userId,
        profilePic: friend.profilePic,
        displayName: friend.displayName,
        owner: friend.owner,
      };

      return newFriend;
    });
  }

  addIsSelect(friends: Friend[]) {
    friends.map(friend => {
      const newFriend = {
        userId: friend.userId,
        profilePic: friend.profilePic,
        displayName: friend.displayName,
        owner: friend.owner,
        isSelect: true
      };

      return newFriend;
    });

    return friends;
  }

  mapFriends(friends: Friend[]) {
    let allFriends = this.state.friends;

    for (let i = 0; i < allFriends.length; i++) {
      for (let j = 0; j < friends.length; j++) {
        if (friends[j].userId === allFriends[i].userId) {
          allFriends[i].isSelect = true;
        }
      }
    }

    return allFriends;
  }

}