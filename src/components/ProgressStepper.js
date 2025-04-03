/*Copyright [2018] IBM Corp. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.*/

import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressStepper extends Component {
  render() {
    const { currentStep } = this.props;

    const steps = [
      "Profile Creation",
      "KYB Process",
      "Additional Business Details",
      "Review Details",
      "Terms & Conditions",
      "Account in CBS",
    ];

    return (
      <div className="progress-stepper">
        <div className="progress-stepper__line"></div>
        <div className="progress-stepper__steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`progress-stepper__step ${
                index + 1 === currentStep
                  ? "progress-stepper__step--active"
                  : ""
              }`}
            >
              <div className="progress-stepper__number">{index + 1}</div>
              <div className="progress-stepper__label">{step}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ProgressStepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default ProgressStepper;
