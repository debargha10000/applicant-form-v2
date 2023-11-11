import React from "react";

const FamilyInfo = ({ formData, handleChange, handleSave, handleNextClick, handlePreviousClick, handleSubmit }) => {
  return (
    <div>
      <h2 className="page-title">Family Information</h2>
      <form onSubmit={handleNextClick}>
        
        {/* father */}
        <h3 className="sub-heading">Father's Information</h3>
        <div className="grid-col-3"> {/* name */}
          <label>First Name:</label>
          <input
            type="text"
            name="family_info.father.first_name"
            value={formData.family_info.father.first_name}
            onChange={handleChange}
            required
          />

          <label>Middle Name:</label>
          <input
            type="text"
            name="family_info.father.middle_name"
            value={formData.family_info.father.middle_name}
            onChange={handleChange}
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="family_info.father.last_name"
            value={formData.family_info.father.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-col-2"> {/* email contact */}
          <label>Email:</label>
          <input
            type="email"
            name="family_info.father.email"
            value={formData.family_info.father.email}
            onChange={handleChange}
          />

          <label>Contact Number:</label>
          <input
            type="number"
            name="family_info.father.contact"
            value={formData.family_info.father.contact}
            onChange={handleChange}
            min="1000000000"
            max="9999999999"
          />
        </div>

        {/* mother */}
        <h3 className="sub-heading">Mother's Information</h3>
        <div className="grid-col-3"> {/* name */}
          <label>First Name:</label>
          <input
            type="text"
            name="family_info.mother.first_name"
            value={formData.family_info.mother.first_name}
            onChange={handleChange}
            required
          />

          <label>Middle Name:</label>
          <input
            type="text"
            name="family_info.mother.middle_name"
            value={formData.family_info.mother.middle_name}
            onChange={handleChange}
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="family_info.mother.last_name"
            value={formData.family_info.mother.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-col-2"> {/* email contact */}
          <label>Email:</label>
          <input
            type="email"
            name="family_info.mother.email"
            value={formData.family_info.mother.email}
            onChange={handleChange}
          />

          <label>Contact Number:</label>
          <input
            type="number"
            name="family_info.mother.contact"
            value={formData.family_info.mother.contact}
            onChange={handleChange}
            min="1000000000"
            max="9999999999"
          />
        </div>

        {/* guardian */}
        <h3 className="sub-heading">Guardian's Information</h3>
        <div className="grid-col-3"> {/* name */}
          <label>First Name:</label>
          <input
            type="text"
            name="family_info.guardian.first_name"
            value={formData.family_info.guardian.first_name}
            onChange={handleChange}
            required
          />

          <label>Middle Name:</label>
          <input
            type="text"
            name="family_info.guardian.middle_name"
            value={formData.family_info.guardian.middle_name}
            onChange={handleChange}
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="family_info.guardian.last_name"
            value={formData.family_info.guardian.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-col-2"> {/* relation occupation*/}
          <label>Relation:</label>
          <input
            type="text"
            name="family_info.guardian.relation"
            value={formData.family_info.guardian.relation}
            onChange={handleChange}
            required
          />

          <label>Occupation:</label>
          <input
            type="text"
            name="family_info.guardian.occupation"
            value={formData.family_info.guardian.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-col-2"> {/* email contact */}
          <label>Email:</label>
          <input
            type="email"
            name="family_info.guardian.email"
            value={formData.family_info.guardian.email}
            onChange={handleChange}
            required
          />

          <label>Contact Number:</label>
          <input
            type="number"
            name="family_info.guardian.contact"
            value={formData.family_info.guardian.contact}
            onChange={handleChange}
            required
            min="1000000000"
            max="9999999999"
          />
        </div>
        <div className="grid-col-3"> {/* designation office_contact income */}
          <label>Designation:</label>
          <input
            type="text"
            name="family_info.guardian.designation"
            value={formData.family_info.guardian.designation}
            onChange={handleChange}
            required
          />

          <label>Office Contact:</label>
          <input
            type="number"
            name="family_info.guardian.office_contact"
            value={formData.family_info.guardian.office_contact}
            onChange={handleChange}
            required
            min="1000000000"
            max="9999999999"
          />

          <label>Income:</label>
          <input
            type="number"
            name="family_info.guardian.income"
            value={formData.family_info.guardian.income}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-col-2"> {/* pan aadhar */}
          <label>Pan Number:</label>
          <input
            type="text"
            name="family_info.guardian.pan_number"
            value={formData.family_info.guardian.pan_number}
            onChange={handleChange}
            required
            maxLength="10"
            minLength="10"
          />

          <label>Aadhar Number:</label>
          <input
            type="number"
            name="family_info.guardian.aadhar_number"
            value={formData.family_info.guardian.aadhar_number}
            onChange={handleChange}
            required
            min="100000000000"
            max="999999999999"
          />
        </div>

        <h4 className="sub-sub-heading">Office Address:</h4> {/* office address */}
        <div>
          <label>Street:</label> {/* street */}
          <input
            type="text"
            name="family_info.guardian.office_address.street"
            value={formData.family_info.guardian.office_address.street}
            onChange={handleChange}
          />

          <div className="grid-col-2"> {/* pin city */}
            <label>Pincode:</label>
            <input
              type="number"
              name="family_info.guardian.office_address.pincode"
              value={formData.family_info.guardian.office_address.pincode}
              onChange={handleChange}
              min="100000"
              max="999999"
            />

            <label>City:</label>
            <input
              type="text"
              name="family_info.guardian.office_address.city"
              value={formData.family_info.guardian.office_address.city}
              onChange={handleChange}
            />
          </div>

          <div className="grid-col-2"> {/* district state */}
            <label>District:</label>
            <input
              type="text"
              name="family_info.guardian.office_address.district"
              value={formData.family_info.guardian.office_address.district}
              onChange={handleChange}
            />

            <label>State:</label>
            <input
              type="text"
              name="family_info.guardian.office_address.state"
              value={formData.family_info.guardian.office_address.state}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="btns"> {/* buttons */}
          <button
            type="button"
            className="btn"
            onClick={handlePreviousClick}
          >
            Previous
          </button>
          <button type="button" className="btn" onClick={handleSave}>Save</button>
          <button type="submit" className="btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FamilyInfo;
