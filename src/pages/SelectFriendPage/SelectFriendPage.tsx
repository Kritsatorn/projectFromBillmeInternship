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

    this.state = {
      billName: '',
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
                    history.pushState(this.state, '', '');
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
                (<Checkbox
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
                />)
            }
          </div>
        </div>
      </div>
    );
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
}