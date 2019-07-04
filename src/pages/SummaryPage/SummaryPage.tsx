import * as React from 'react';
import { BillFacade } from '../../facades/BillFacade';
import { SummaryPageState, Friend, Item } from './SummaryPageTypes';
import './SummaryPage.css';

export class SummaryPage
  extends React.Component<object, SummaryPageState> {

    private fileInput: HTMLInputElement | null;

    constructor(props: object) {
      super(props);

      this.state = {
        showFriendMenu: false,
        url: '',
        bill: {
          billImage: '',
          billName: '',
          billDate: '18 มิ.ย. 2562',
          billOwnerName: 'Tangkwa',
          billOwnerImage: 'https://bit.ly/2J9C0Hv'
        },
        previousState: {
          billName: '',
          userId: '',
          groupId: '',
          items: [],
          vat: 7,
          vatStatus: false,
          vatPrice: 0,
          serviceCharge: 10,
          serviceChargePrice: 0,
          serviceChargeStatus: false,
          totalPrice: 0,
          totalBillPrice: 0,
          friends: [],
          selectedFriendList: [],
          selectedFriend: 1,
          paymentList: []
        }
      };

      this.showFriendList = this.showFriendList.bind(this);
    }

    componentDidMount() {
      if (history.state !== null) {
        const { billName, userId, groupId,
          selectedFriendList, totalPrice, items,
          vat, vatStatus, vatPrice,
          serviceCharge, serviceChargeStatus, serviceChargePrice,
          totalBillPrice, paymentList } = history.state;

        const previousState = this.state.previousState;

        previousState.billName = billName,
        previousState.userId = userId,
        previousState.groupId = groupId,
        previousState.selectedFriendList = selectedFriendList,
        previousState.totalPrice = totalPrice,
        previousState.items = items,
        previousState.vat = vat,
        previousState.vatStatus = vatStatus,
        previousState.vatPrice = vatPrice,
        previousState.serviceCharge = serviceCharge,
        previousState.serviceChargeStatus = serviceChargeStatus,
        previousState.serviceChargePrice = serviceChargePrice,
        previousState.totalBillPrice = totalBillPrice;
        previousState.paymentList = paymentList;

        this.setState({previousState});
      }
    }

    render() {
      console.log(this.state.previousState.paymentList);
      return (
        <div className="summary__background">
          <div className="header__background">
            <div
              className="bill-image-summary-box"
              onClick={() => this.handleClickUploadImage()}
            >
              <img
                className="bill-image-summary"
                src={
                  this.state.url ?
                  this.state.url :
                  require('../../assets/upload__picture.jpg')
                }
              />
              <input
                className="bill-input"
                ref={input => this.fileInput = input}
                type="file"
                accept="image/*"
                onChange={event => this.uploadImage(event)}
              />
            </div>
            <div className="bill-detail-summary">
              <div className="bill-name-summary">{this.state.previousState.billName}</div>
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
                <div className="service-feild-price">
                  {this.state.previousState.serviceChargePrice.toLocaleString()}
                </div>
              </div>
              <div className="vat-feild">
                VAT
                <div className="vat-feild-price">{this.state.previousState.vatPrice.toLocaleString()}</div>
              </div>
              <div className="total__price">
                <div className="total__price-name">รวม</div>
                <div className="total__price-price">
                  {this.state.previousState.totalBillPrice.toLocaleString()}
                </div>
              </div>
              <div
                className="menu-button-equal"
                onClick={() => this.handleCreateBill(this.state)}
              >
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

    handleCreateBill(bill: SummaryPageState) {
      return  BillFacade.createBill(
        this.state.previousState.userId,
        this.state.previousState.groupId,
        bill
      );
    }

    handleClickUploadImage() {
      this.fileInput!.click();
    }

    uploadImage(event: React.ChangeEvent<HTMLInputElement>) {
      const file = event.target.files!.item(0)!;

      BillFacade.ImageUpload(file)
      .then(result => {
        this.setState({url: result.key});
      });
    }
    mappingMenu() {
      return(
        this.state.previousState.items.map(
          (menu, index) => {
            return this.renderMenu(index, menu);
          }
        )
      );
    }

    renderMenu(index: number, menu: Item) {
      return(
        <div key={index} className="menu-card">
          <div className="menu-card-name">
            {menu.detail}
          </div>
          <div className="menu-card-price">
            {menu.price}
          </div>
        </div>
      );
    }

    mappingFriendList() {
      return(
        this.state.previousState.selectedFriendList.map(
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