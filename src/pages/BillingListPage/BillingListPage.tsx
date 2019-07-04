import * as React from 'react';
import { BillFacade } from '../../facades/BillFacade';
import { Button } from '../../components/Button/Button';
import { BillingListPageState } from './BillingListPageTypes';
import { BillingCard } from '../../components/BillingCard/BillingCard';
import { MyWindow, LineInit } from '../../definitions/interfaces/MyWindow';
import './BillingListPage.css';

export class BillingListPage
    extends React.Component<object, BillingListPageState> {

    myWindow: MyWindow = window;
    liff = this.myWindow.liff;

    constructor(props: object) {
      super(props);

      this.state = {
        userId: '',
        groupId: '',
        billInfo: [],
        isLoadingComplete: false,
        isEmpty: false
      };

      const billList = BillFacade.getBillList(this.state.userId, this.state.groupId);
      if (billList !== null) {
          billList.then(result => {
          this.setState({
            billInfo: result.billList,
            isLoadingComplete: true
          });
        });
      } else {
        this.setState({isEmpty: true});
      }

      this.initialize = this.initialize.bind(this);
    }

    componentDidMount() {
      window.addEventListener('load', this.initialize);
    }

    initialize() {
      this.liff!.init(async (data: LineInit) => {
        let profile = await this.liff!.getProfile();
        this.setState({
          userId : profile.userId,
          groupId: data.context.groupId
        });
      });
    }

    render() {
      return (
        <div className="billing__list-page">
          <div className="title-page">
            <div className="title-text">รายการบิลที่มี</div>
          </div>
          <div className="billing__list-page__container">
            {
              this.state.isEmpty ?
              (
                this.state.isLoadingComplete ?
                this.renderUnfinishedBillBox(this.state.billInfo) :
                <br/>
              ) :
              <div className="empty__bill">
                 - ยังไม่มีรายการ -
              </div>
            }
          <div className="footer">
            <Button
              title="เพิ่มบิลใหม่"
              type=""
              disable={false}
              onClick={() => {
                history.pushState(this.stateInfomation(), '', '/create');
                history.go();
              }}
            />
          </div>
          <div className="background-footer" />
          </div>
        </div>
      );
    }

    stateInfomation() {
      const state = {
        userId: this.state.userId,
        groupId: this.state.groupId
      };
      return state;
    }

    renderUnfinishedBillBox(
      data2: {
        billId: string;
        billName: string ;
        billOwner: string;
        billStatus: string;
        publishDate: string;
        image: string;
      }[]
    ) {
      return data2.map((result, index) => {
        return(
          <div key={`unfinish-bill--${index}`}>
            <BillingCard
              billName={result.billName}
              billOwner={result.billOwner}
              publishDate={result.publishDate}
              status={result.billStatus}
              image={result.image}
            />
          </div>
        );
      });
    }
}