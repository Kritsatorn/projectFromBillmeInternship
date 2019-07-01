import * as React from 'react';
import { BillingCardProps } from './BillingCardTypes';
import './BillingCard.css';

export class BillingCard
  extends React.Component<BillingCardProps> {

  render() {
    const { billName, billOwner, publishDate, image } = this.props;

    return (
      <div className="box">
        <img
          className="bill-image"
          src={image}
          alt=""
        />
        <div className="box_info">
          <div className="bill-name">{billName}</div>
          <div className="bill-detail">{billOwner}<br/>{publishDate}</div>
        </div>
      </div>
    );
  }
}