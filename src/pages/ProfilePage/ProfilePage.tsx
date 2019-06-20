import * as React from 'react';
import { ProfilePageState } from './ProfilePageTypes';
import { BillFacade } from '../../facades/BillFacade';
import { Button } from '../../components/Button/Button';
import { MyWindow } from '../../definitions/interfaces/MyWindow';
import { UnfinishedBillBox } from '../../components/UnfinishedBillBox/UnfinishedBillBox';
import './ProfilePage.css';

export class ProfilePage
    extends React.Component<object, ProfilePageState> {

    myWindow: MyWindow = window;
    liff = this.myWindow.liff;

    constructor(props: object) {
      super(props);

      this.state = {
        userId : '',
        billInfo: [],
        isLoadingComplete: false
      };

      const billList = BillFacade.getBillList('userId');

      billList.then(result => {
        this.setState({
          billInfo: result.billList,
          isLoadingComplete: true
        });
      });

      this.initialize = this.initialize.bind(this);
    }

    componentDidMount() {
      window.addEventListener('load', this.initialize);
    }

    initialize() {
      this.liff!.init(async () => {
        let profile = await this.liff!.getProfile();
        this.setState({
          userId : profile.userId
        });
      });
    }

    render() {
      return (
        <div className="profile-page">
          <div className="title">
            <div className="title-text">รายการบิลที่มี</div>
          </div>
          <div className="profile-page__container">
            {
              this.state.isLoadingComplete ?
              this.renderUnfinishedBillBox(this.state.billInfo) :
              <br/>
            }
          <div className="footer">
            <Button
              title="HI"
              type=""
              disable={false}
            />
          </div>
          <div className="background-footer" />
          </div>
        </div>
      );
    }

    renderUnfinishedBillBox(
      data2: {
        billId: string;
        billName: string ;
        billOwner: string;
        billStatus: boolean;
        publishDate: string;
        image: string;
      }[]
    ) {
      return data2.map((result, index) => {
        return(
          <div key={`unfinish-bill--${index}`}>
            <UnfinishedBillBox
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