import * as React from 'react';
import { StepperProps } from './StepperTypes';
import './Stepper.css';
import { BillingStep } from '../../definitions/enum/BillingStep';

export class Stepper
  extends React.Component<StepperProps> {

  render() {
    const { step = 0, step1, step2, step3 } = this.props;

    return (
      <div className="stepper">
        <div className="stepper-bar">
          <div className="progress-box">
            <div className="progress">
              <div className={this.stepperProgress(step)[BillingStep.CREATE_BILL]} />
            </div>
            <div className="stepper-title">{step1}</div>
          </div>
          <div className="progress-box">
            <div className="progress">
              <div className={this.stepperProgress(step)[1]} />
            </div>
            <div className="stepper-title">{step2}</div>
          </div>
          <div className="progress-box">
            <div className="progress">
              <div className={this.stepperProgress(step)[2]} />
            </div>
            <div className="stepper-title">{step3}</div>
          </div>
        </div>
      </div>
    );
  }

  stepperProgress(step: number) {
    if (step === BillingStep.CREATE_BILL) {
      return ['status current', 'status none', 'status none'];
    } else if (step === BillingStep.ADD_FRIENDS) {
      return ['status pass', 'status current', 'status none'];
    } else if (step === BillingStep.PAYMENTS) {
      return ['status pass', 'status pass', 'status current'];
    } else {
      return ['status none', 'status none', 'status none'];
    }
  }
}