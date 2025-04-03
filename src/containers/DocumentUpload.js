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
import { connect } from "react-redux";
import ProgressStepper from "../components/ProgressStepper";
import DocumentUploadForm from "../components/DocumentUploadForm";

class DocumentUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessDetails: {
        businessName: "",
        registrationNumber: "",
        contactNumber: "",
        contactEmail: "",
        postcode: "",
        address: "",
      },
      documents: {
        businessRegistration: "",
        taxIdentification: "",
        ownershipDocuments: "",
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDocumentUpload = this.handleDocumentUpload.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    const category = e.target.getAttribute("data-category");

    this.setState((prevState) => ({
      [category]: {
        ...prevState[category],
        [name]: value,
      },
    }));
  }

  handleDocumentUpload(documentType) {
    // Handle document upload logic
    console.log("Uploading document:", documentType);
  }

  handlePrevious() {
    // Handle navigation to previous step
    console.log("Navigate to previous step");
  }

  handleNext() {
    // Handle navigation to next step
    console.log("Navigate to next step");
  }

  render() {
    const { businessDetails, documents } = this.state;

    return (
      <div className="document-upload">
        <div className="document-upload__header">
          <img
            src="https://placehold.co/40x40/006A4D/006A4D"
            alt="Lloyds Bank Logo"
            className="document-upload__logo"
          />
          <nav className="document-upload__nav">
            <div className="document-upload__nav-item">Home</div>
            <div className="document-upload__nav-item">Onboarding</div>
            <div className="document-upload__nav-item">Associate Account</div>
          </nav>
          <div className="document-upload__menu-icon">
            <i className="ti ti-menu-2"></i>
          </div>
        </div>

        <div className="document-upload__content">
          <div className="document-upload__container">
            <h1 className="document-upload__title">Customer Onboarding</h1>

            <ProgressStepper currentStep={1} />

            <DocumentUploadForm
              businessDetails={businessDetails}
              documents={documents}
              onInputChange={this.handleInputChange}
              onDocumentUpload={this.handleDocumentUpload}
              onPrevious={this.handlePrevious}
              onNext={this.handleNext}
            />
          </div>
        </div>

        <footer className="document-upload__footer">
          © 2024 LLOYDS BANK. ALL RIGHTS RESERVED.
        </footer>
      </div>
    );
  }
}

DocumentUpload.propTypes = {
  // Add PropTypes as needed
};

export default DocumentUpload;
