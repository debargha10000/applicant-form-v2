import React from "react";

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          name="personal_info.first_name"
          value={formData.personal_info.first_name}
          onChange={handleChange}
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
        />

        <label>Email:</label>
        <input
          type="email"
          name="personal_info.email"
          value={formData.personal_info.email}
          onChange={handleChange}
        />

        <label>Contact Number:</label>
        <input
          type="number"
          name="personal_info.contact"
          value={formData.personal_info.contact}
          onChange={handleChange}
        />

        <label>Gender:</label>
        <select
          name="personal_info.gender"
          value={formData.personal_info.gender}
          onChange={handleChange}
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
        />

        <label>Category:</label>
        <select
          name="personal_info.category"
          value={formData.personal_info.category}
          onChange={handleChange}
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

        <label>Aadhar Number:</label>
        <input
          type="number"
          name="personal_info.aadhar_number"
          value={formData.personal_info.aadhar_number}
          onChange={handleChange}
        />

        <label>PAN Number:</label>
        <input
          type="text"
          name="personal_info.pan_number"
          value={formData.personal_info.pan_number}
          onChange={handleChange}
        />

        <h3>Present Address</h3>
        <label>Street:</label>
        <input
          type="text"
          name="personal_info.present_address.street"
          value={formData.personal_info.present_address.street}
          onChange={handleChange}
        />
        <label>Pincode:</label>
        <input
          type="text"
          name="personal_info.present_address.pincode"
          value={formData.personal_info.present_address.pincode}
          onChange={handleChange}
        />
        <label>City:</label>
        <input
          type="text"
          name="personal_info.present_address.city"
          value={formData.personal_info.present_address.city}
          onChange={handleChange}
        />
        <label>District:</label>
        <input
          type="text"
          name="personal_info.present_address.district"
          value={formData.personal_info.present_address.district}
          onChange={handleChange}
        />
        <label>State:</label>
        <input
          type="text"
          name="personal_info.present_address.state"
          value={formData.personal_info.present_address.state}
          onChange={handleChange}
        />

        <h3>Permanent Address</h3>
        <label>Street:</label>
        <input
          type="text"
          name="personal_info.permanent_address.street"
          value={formData.personal_info.permanent_address.street}
          onChange={handleChange}
        />
        <label>Pincode:</label>
        <input
          type="text"
          name="personal_info.permanent_address.pincode"
          value={formData.personal_info.permanent_address.pincode}
          onChange={handleChange}
        />
        <label>City:</label>
        <input
          type="text"
          name="personal_info.permanent_address.city"
          value={formData.personal_info.permanent_address.city}
          onChange={handleChange}
        />
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

      </form>
    </div>
  );
};

export default PersonalInfo;
