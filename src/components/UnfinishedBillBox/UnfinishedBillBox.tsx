import * as React from 'react';
import { UnfinishedBillBoxProps } from './UnfinishedBillBoxType';
import './UnfinishedBillBox.css';

export class UnfinishedBillBox extends React.Component<UnfinishedBillBoxProps> {
  render() {
    const { bill_name , bill_owner , publish_date, image } = this.props;
    return (
        <div className="box">
          <img
            className="box_image"
            src={image}
            alt=""
          />
          <div className="box_info">
            <div className="bill-name">{bill_name}</div>
            <div className="bill-detail">{bill_owner}<br/>{publish_date}</div>
          </div>
        </div>
    );
  }
}