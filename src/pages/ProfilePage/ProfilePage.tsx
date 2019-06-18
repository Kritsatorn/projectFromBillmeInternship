import * as React from 'react';
import { ProfilePageState } from './ProfilePageType';
import { UnfinishedBillBox } from '../../components/UnfinishedBillBox/UnfinishedBillBox';
import './ProfilePage.css';

interface MyWindow extends Window {
  liff?: {
     // tslint:disable-next-line: no-any
    init: (data: any) => void;
    getProfile: () => {
      displayName: string,
      pictureUrl: string,
      statusMessage: string
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
        count : 0,
        text : '',
        displayName : '',
        userId : '',
        pictureUrl : '',
        statusMessage : ''
      };

      // this.initialize = this.initialize.bind(this);
    }
    // componentDidMount() {
    // 	window.addEventListener('load', this.initialize);
    // }

    // initialize() {
    // 	this.liff!.init(async (data) => {
    // 		let profile = await this.liff!.getProfile();
    // 		this.setState({
    // 			displayName : profile.displayName,
    // 			userId : profile.userId,
    // 			pictureUrl : profile.pictureUrl,
    // 			statusMessage : profile.statusMessage
    // 		});
    // 	});
    // }

    render() {
      const image = require('../../assets/Angry_Birds_Fat.png');
      return (
        <div className="Profile-page">
          <div className="title">
            รายการบิลที่มี
          </div>
          <div className="Profile-page_container">

              <UnfinishedBillBox
                text="กินข้าวร้านครัวแกงเผ็ด"
                text2="By Pammu"
                text3="15 April 2018"
                status={true}
                image={image}
              />
              <UnfinishedBillBox
                text="กินข้าวร้านครัวแกงเผ็ด"
                text2="By Pammu"
                text3="15 April 2018"
                status={true}
                image={image}
              />
              <UnfinishedBillBox
                text="กินข้าวร้านครัวแกงเผ็ด"
                text2="By Pammu"
                text3="15 April 2018"
                status={true}
                image={image}
              />

          </div>

        </div>
        );
    }
  }