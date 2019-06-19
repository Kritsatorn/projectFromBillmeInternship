import * as React from 'react';
import { StepperProps } from './StepperType';
import './Stepper.css';

export class Stepper
  extends React.Component<StepperProps> {
    render() {
      const{ status = '', title1, title2, title3 } = this.props;
      return (
        <div className="Stepper">
          <div className="Stepper-bar">
              <div className="Progress">
                <div className={this.stepperProgress(status)[0]} />
              </div>
              <div className="Lockbar">
                <div className="Tagbar" />
              </div>
              <div className="Progress">
                <div className={this.stepperProgress(status)[1]} />
              </div>
              <div className="Lockbar">
                <div className="Tagbar" />
              </div>
              <div className="Progress">
                <div className={this.stepperProgress(status)[2]} />
              </div>
          </div>
          <div className="Stepper-title">
            <div>{title1}</div>
            <div>{title2}</div>
            <div>{title3}</div>
          </div>
        </div>
      );
    }

    stepperProgress(status: string) {
      if (status === '1') {
        return ['status current', 'status none', 'status none'];
      } else if (status === '2') {
        return ['status pass', 'status current', 'status none'];
      } else if (status === '3') {
        return ['status pass', 'status pass', 'status current'];
      } else {
        return ['status none', 'status none', 'status none'];
      }
    }
}