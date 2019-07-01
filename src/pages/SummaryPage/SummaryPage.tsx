import * as React from 'react';
import { SummaryPageState, Friend } from './SummaryPageTypes';
import './SummaryPage.css';

export class SummaryPage
  extends React.Component<object, SummaryPageState> {

    constructor(props: object) {
      super(props);

      this.state = {
        showFriendMenu: true,
        bill: {
          billImage: '',
          billName: 'ค่าข้าวเที่ยงร้านเฮลโล่ว',
          billDate: '18 มิ.ย. 2562',
          billOwnerName: 'Tangkwa',
          billOwnerImage: 'https://bit.ly/2J9C0Hv'
        },
        friends: [
          {
            userId: '2',
            profilePic: 'https://bit.ly/2J9C0Hv',
            displayName: 'Wiput',
            owner: false
          },
          {
            userId: '2',
            profilePic: 'https://bit.ly/2J9C0Hv',
            displayName: 'Wiput',
            owner: true
          },
          {
            userId: '2',
            profilePic: 'https://bit.ly/2J9C0Hv',
            displayName: 'Wiput',
            owner: false
          },
          {
            userId: '2',
            profilePic: 'https://bit.ly/2J9C0Hv',
            displayName: 'Wiput',
            owner: false
          },
          {
            userId: '2',
            profilePic: 'https://bit.ly/2J9C0Hv',
            displayName: 'Wiput',
            owner: false
          },
          {
            userId: '2',
            profilePic: 'https://bit.ly/2J9C0Hv',
            displayName: 'Wiput',
            owner: false
          },
          {
            userId: '2',
            profilePic: 'https://bit.ly/2J9C0Hv',
            displayName: 'Wiput',
            owner: false
          }
        ]
      };

      this.showFriendList = this.showFriendList.bind(this);
    }

    render() {
      return (
        <div className="summary__background">
          <div className="header__background">
            <img className="bill-image" src={require('../../assets/upload__picture.jpg')}/>
            <div className="bill-detail">
              <div className="bill-name">{this.state.bill.billName}</div>
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
                  ดูทั้งหมด
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