import * as React from 'react';
import { MenuData } from '../../mocks/MenuData';
import { FriendData } from '../../mocks/FriendData';
import { SummaryPageState, Friend, Menu } from './SummaryPageTypes';
import './SummaryPage.css';

export class SummaryPage
  extends React.Component<object, SummaryPageState> {

    constructor(props: object) {
      super(props);

      this.state = {
        showFriendMenu: false,
        servicePrice: 0.00,
        vatPrice: 3.85,
        totalPrice: 58.85,
        bill: {
          billImage: '',
          billName: 'ค่าข้าวเที่ยงร้านเฮลโล่ว',
          billDate: '18 มิ.ย. 2562',
          billOwnerName: 'Tangkwa',
          billOwnerImage: 'https://bit.ly/2J9C0Hv'
        },
        friends: FriendData.friends,
        menu: MenuData.menu
      };

      this.showFriendList = this.showFriendList.bind(this);
    }

    render() {
      return (
        <div className="summary__background">
          <div className="header__background">
            <img className="bill-image-summary" src={require('../../assets/upload__picture.jpg')}/>
            <div className="bill-detail-summary">
              <div className="bill-name-summary">{this.state.bill.billName}</div>
              <div className="bill-date">{this.state.bill.billDate}</div>
              <div className="bill-user">
                <img className="bill-owner-image" src={this.state.bill.billOwnerImage}/>
                <div className="bill-owner-name">{this.state.bill.billOwnerName}</div>
              </div>
            </div>
          </div>
          <div className="friend-field">
              <div className="friend-bar">
                <div className="friend-bar-title">เพื่อนที่หารด้วยกัน</div>
                <div
                  className="friend-bar-button"
                  onClick={event => this.showFriendList(event)}
                >
                  {
                    !this.state.showFriendMenu ?
                    'ดูทั้งหมด' :
                    'ย่อ'
                  }
                </div>
              </div>
              <div
                className={
                  this.state.showFriendMenu ?
                  'friend-show-column' :
                  'friend-show-row'
                }
              >
                {this.mappingFriendList()}
              </div>
          </div>
          <div className="menu-feild">
            <div className="menu-title">รายการในบิล</div>
            <div className="inside__menu-feild">
              <div className="menu-card-feild">
                {this.mappingMenu()}
              </div>
              <div className="service-feild">
                Service charge
                <div className="service-feild-price">{this.state.servicePrice}</div>
              </div>
              <div className="vat-feild">
                VAT
                <div className="vat-feild-price">{this.state.vatPrice}</div>
              </div>
              <div className="total__price">
                <div className="total__price-name">รวม</div>
                <div className="total__price-price">{this.state.totalPrice}</div>
              </div>
              <div className="menu-button-equal">
                หารกับเพื่อนเท่าๆกัน
              </div>
              <div className="menu-button-not__equal">
                ให้เพื่อนๆเข้ามาเลือกรายการของตนเอง
              </div>
            </div>
          </div>
        </div>
      );
    }

    mappingMenu() {
      return(
        this.state.menu.map(
          (menu, index) => {
            return this.renderMenu(index, menu);
          }
        )
      );
    }

    renderMenu(index: number, menu: Menu) {
      return(
        <div key={index} className="menu-card">
          <div className="menu-card-name">
            {menu.menuName}
          </div>
          <div className="menu-card-price">
            {menu.menuPrice}
          </div>
        </div>
      );
    }

    mappingFriendList() {
      return(
        this.state.friends.map(
          (friends, index) => {
            return this.renderFriend(index, friends);
          }
        )
      );
    }

    renderFriend(index: number, friend: Friend) {
      return(
        <div key={index} className={`friend-card`}>
          <div className={`friend-card-image-box ${friend.owner ? 'owner' : ''}`}>
            {
              !friend.owner ?
              <img
                className={'friend-card-image'}
                src={friend.profilePic}
              /> :
              <div className="friend-card-image-box-owner">
                <img
                  className={'friend-card-image-owner'}
                  src={friend.profilePic}
                />
                <img
                  className={'friend-card-image-owner-crow'}
                  src={require('../../assets/crown.png')}
                />
              </div>
            }
          </div>
          <div
            className={`friend-card-name ${friend.owner ? 'owner' : ''}`}
          >
            {friend.displayName}
          </div>
        </div>
      );
    }

    showFriendList(event: React.MouseEvent<HTMLDivElement>) {
      event.preventDefault();

      this.state.showFriendMenu ?
      this.setState(
        {showFriendMenu: false}
      ) :
      this.setState(
        {showFriendMenu: true}
      );
    }
  }