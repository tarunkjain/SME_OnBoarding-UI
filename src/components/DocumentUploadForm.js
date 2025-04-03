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

class DocumentUploadForm extends Component {
  render() {
    const {
      businessDetails,
      documents,
      onInputChange,
      onDocumentUpload,
      onPrevious,
      onNext,
    } = this.props;

    return (
      <div className="document-form">
        <h2 className="document-form__section-title">Business Details</h2>

        <div className="document-form__grid">
          <div className="document-form__field">
            <label className="document-form__label">Business Name</label>
            <input
              type="text"
              name="businessName"
              data-category="businessDetails"
              value={businessDetails.businessName}
              onChange={onInputChange}
              className="document-form__input"
            />
          </div>

          <div className="document-form__field">
            <label className="document-form__label">Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              data-category="businessDetails"
              value={businessDetails.registrationNumber}
              onChange={onInputChange}
              className="document-form__input"
            />
          </div>

          <div className="document-form__field">
            <label className="document-form__label">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              data-category="businessDetails"
              value={businessDetails.contactNumber}
              onChange={onInputChange}
              className="document-form__input"
            />
          </div>

          <div className="document-form__field">
            <label className="document-form__label">Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              data-category="businessDetails"
              value={businessDetails.contactEmail}
              onChange={onInputChange}
              className="document-form__input"
            />
          </div>

          <div className="document-form__field">
            <label className="document-form__label">Postcode</label>
            <input
              type="text"
              name="postcode"
              data-category="businessDetails"
              value={businessDetails.postcode}
              onChange={onInputChange}
              className="document-form__input"
            />
          </div>

          <div className="document-form__field">
            <label className="document-form__label">Address</label>
            <input
              type="text"
              name="address"
              data-category="businessDetails"
              value={businessDetails.address}
              onChange={onInputChange}
              className="document-form__input"
            />
          </div>
        </div>

        <h2 className="document-form__section-title">Documents</h2>

        <div className="document-form__documents">
          <div className="document-form__upload-field">
            <input
              type="text"
              name="businessRegistration"
              data-category="documents"
              value={documents.businessRegistration}
              onChange={onInputChange}
              placeholder="Business Registration"
              className="document-form__input"
            />
            <button
              onClick={() => onDocumentUpload("businessRegistration")}
              className="document-form__upload-btn"
            >
              Upload
            </button>
          </div>

          <div className="document-form__upload-field">
            <input
              type="text"
              name="taxIdentification"
              data-category="documents"
              value={documents.taxIdentification}
              onChange={onInputChange}
              placeholder="Tax Identification"
              className="document-form__input"
            />
            <button
              onClick={() => onDocumentUpload("taxIdentification")}
              className="document-form__upload-btn"
            >
              Upload
            </button>
          </div>

          <div className="document-form__upload-field">
            <input
              type="text"
              name="ownershipDocuments"
              data-category="documents"
              value={documents.ownershipDocuments}
              onChange={onInputChange}
              placeholder="Ownership Documents"
              className="document-form__input"
            />
            <button
              onClick={() => onDocumentUpload("ownershipDocuments")}
              className="document-form__upload-btn"
            >
              Upload
            </button>
          </div>
        </div>

        <div className="document-form__actions">
          <button
            onClick={onPrevious}
            className="document-form__btn document-form__btn--secondary"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="document-form__btn document-form__btn--primary"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

DocumentUploadForm.propTypes = {
  businessDetails: PropTypes.shape({
    businessName: PropTypes.string,
    registrationNumber: PropTypes.string,
    contactNumber: PropTypes.string,
    contactEmail: PropTypes.string,
    postcode: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  documents: PropTypes.shape({
    businessRegistration: PropTypes.string,
    taxIdentification: PropTypes.string,
    ownershipDocuments: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onDocumentUpload: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default DocumentUploadForm;
