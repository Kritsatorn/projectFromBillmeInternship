import * as React from 'react';
import { BillPaymentState } from './BillPaymentTypes';
import { Dropdown } from '../../components/Dropdown/Dropdown';

export class BillPayment
  extends React.Component<object, BillPaymentState> {

    constructor(props: {}) {
      super(props);

      this.state = {
        text: ''
      };

      this.handleValueChange = this.handleValueChange.bind(this);
    }

    render() {
      return (
        <div>
          <Dropdown
            title="เลือก . . . "
            onChange={this.handleValueChange}
          />
          <div>{this.state.text}</div>
        </div>
      );
    }

    handleValueChange(text: string) {
      this.setState({text: text});
    }
  }