import * as React from 'react';
import { ProfilePageState } from './ProfilePageType';
import { BillFacade } from '../../facades/BillFacade';
import { Button } from '../../components/Button/Button';
import { UnfinishedBillBox } from '../../components/UnfinishedBillBox/UnfinishedBillBox';
import './ProfilePage.css';

interface MyWindow extends Window {
  liff?: {
     // tslint:disable-next-line: no-any
    init: (data: any) => void;
    getProfile: () => {
      displayName: string,
      pictureUrl: string,
      statusMessage: string,
      userId: string
    };
    closeWindow: () => void;
     // tslint:disable-next-line: no-any
    sendMessages: (data: any) => Promise<any>;
  };
}

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
        <div className="Profile-page">
          <div className="title">
            <div className="title-text">รายการบิลที่มี</div>
          </div>
          <div className="Profile-page_container">
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
              bill_name={result.billName}
              bill_owner={result.billOwner}
              publish_date={result.publishDate}
              status={result.billStatus}
              image={result.image}
            />
          </div>
        );
      });
    }
}