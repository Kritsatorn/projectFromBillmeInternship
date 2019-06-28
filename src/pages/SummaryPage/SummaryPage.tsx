import * as React from 'react';
import { SummaryPageState } from './SummaryPageTypes';
import './SummaryPage.css';

export class SummaryPage
  extends React.Component<object, SummaryPageState> {

    constructor(props: object) {
      super(props);

      this.state = {
        showFriendMenu: false,
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
        ]
      };
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
                <div className="friend-bar-button">b</div>
              </div>
              <div className="friend-show">
                {
                  this.state.showFriendMenu ?
                  null :
                  null
                }
              </div>
          </div>
        </div>
      );
    }
  }