import * as React from 'react';
import { Dropdown } from '../../components/Dropdown/Dropdown';
export class BillPayment
  extends React.Component<object> {

    render() {
      return (
        <div>
          <Dropdown
            title="เลือก . . . "
          />
        </div>
      );
    }
  }