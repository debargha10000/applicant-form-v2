import React from "react";

const PersonalInfo = ({ formData, handleChange, handleSave, handleNextClick, handlePreviousClick, handleSubmit }) => {
  return (
    <div>
      <h2 className="page-title">Personal Information</h2>
      <form onSubmit={handleNextClick}>
        <div className="grid-col-3"> {/* name */}
          <label>First Name:</label>
          <input
            type="text"
            name="personal_info.first_name"
            value={formData.personal_info.first_name}
            onChange={handleChange}
            required
          />

          <label>Middle Name:</label>
          <input
            type="text"
            name="personal_info.middle_name"
            value={formData.personal_info.middle_name}
            onChange={handleChange}
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="personal_info.last_name"
            value={formData.personal_info.last_name}
            onChange={handleChange}
            required
          />          
        </div>
        <div className="grid-col-2"> {/* email contact */}
          <label>Email:</label>
          <input
            type="email"
            name="personal_info.email"
            value={formData.personal_info.email}
            onChange={handleChange}
            required
          />

          <label>Contact Number:</label>
          <input
            type="number"
            name="personal_info.contact"
            value={formData.personal_info.contact}
            onChange={handleChange}
            required
            min="1000000000"
            max="9999999999"
          />          
        </div>
        <div className="grid-col-2"> {/* gender dob */}
          <label>Gender:</label>
          <select
            name="personal_info.gender"
            value={formData.personal_info.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>Date of Birth:</label>
          <input
            type="date"
            name="personal_info.dob"
            value={formData.personal_info.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-col-2"> {/* category blood_group */}
          <label>Category:</label>
          <select
            name="personal_info.category"
            value={formData.personal_info.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="GN">General</option>
            <option value="SC">Scheduled Caste</option>
            <option value="ST">Scheduled Tribe</option>
            <option value="OBC">Other Backward Classes</option>
            <option value="EWS">Economically Weaker Section</option>
            <option value="Other">Other</option>
          </select>

          <label>Blood Group:</label>
          <select
            name="personal_info.blood_group"
            value={formData.personal_info.blood_group}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="grid-col-2"> {/* aadhar pan */}
          <label>Aadhar Number:</label>
          <input
            type="number"
            name="personal_info.aadhar_number"
            value={formData.personal_info.aadhar_number}
            onChange={handleChange}
            required
            min="100000000000"
            max="999999999999"
          />

          <label>PAN Number:</label>
          <input
            type="text"
            name="personal_info.pan_number"
            value={formData.personal_info.pan_number}
            onChange={handleChange}
            required
            minLength="10"
            maxLength="10"
          />          
        </div>

        <h3 className="sub-heading">Present Address</h3> {/* present address */}
        <label>Street:</label>
        <input
          type="text"
          name="personal_info.present_address.street"
          value={formData.personal_info.present_address.street}
          onChange={handleChange}
          required
        />
        <div className="grid-col-2"> {/* pin city */}
          <label>Pincode:</label>
          <input
            type="number"
            name="personal_info.present_address.pincode"
            value={formData.personal_info.present_address.pincode}
            onChange={handleChange}
            required
            min="100000"
            max="999999"
          />

          <label>City:</label>
          <input
            type="text"
            name="personal_info.present_address.city"
            value={formData.personal_info.present_address.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid-col-2"> {/* district state */}
          <label>District:</label>
          <input
            type="text"
            name="personal_info.present_address.district"
            value={formData.personal_info.present_address.district}
            onChange={handleChange}
            required
          />

          <label>State:</label>
          <input
            type="text"
            name="personal_info.present_address.state"
            value={formData.personal_info.present_address.state}
            onChange={handleChange}
            required
          />
        </div>

        <h3 className="sub-heading">Permanent Address</h3> {/* permanent address */}
        <label>Street:</label>
        <input
          type="text"
          name="personal_info.permanent_address.street"
          value={formData.personal_info.permanent_address.street}
          onChange={handleChange}
        />
        <div className="grid-col-2"> {/* pin city */}
          <label>Pincode:</label>
          <input
            type="number"
            name="personal_info.permanent_address.pincode"
            value={formData.personal_info.permanent_address.pincode}
            onChange={handleChange}
            min="100000"
            max="999999"
          />
          <label>City:</label>
          <input
            type="text"
            name="personal_info.permanent_address.city"
            value={formData.personal_info.permanent_address.city}
            onChange={handleChange}
          />
        </div>
        <div className="grid-col-2"> {/* district state */}
          <label>District:</label>
          <input
            type="text"
            name="personal_info.permanent_address.district"
            value={formData.personal_info.permanent_address.district}
            onChange={handleChange}
          />
          <label>State:</label>
          <input
            type="text"
            name="personal_info.permanent_address.state"
            value={formData.personal_info.permanent_address.state}
            onChange={handleChange}
          />
        </div>


        <div className="btns"> {/* buttons */}
          <button type="button" className="btn" onClick={handleSave}>Save</button>
          <button className="btn" type="submit" >
            Next
          </button>
          
        </div>

      </form>
    </div>
  );
};

export default PersonalInfo;
