import React from "react";

const FamilyInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Family Information</h2>
      <form>
        <h3>Father's Information</h3>
        <label>First Name:</label>
        <input
          type="text"
          name="family_info.father.first_name"
          value={formData.family_info.father.first_name}
          onChange={handleChange}
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
        />

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
        />

        <label>Occupation:</label>
        <input
          type="text"
          name="family_info.father.occupation"
          value={formData.family_info.father.occupation}
          onChange={handleChange}
        />

        <h3>Mother's Information</h3>
        <label>First Name:</label>
        <input
          type="text"
          name="family_info.mother.first_name"
          value={formData.family_info.mother.first_name}
          onChange={handleChange}
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
        />

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
        />

        <label>Occupation:</label>
        <input
          type="text"
          name="family_info.mother.occupation"
          value={formData.family_info.mother.occupation}
          onChange={handleChange}
        />

        <h3>Guardian's Information</h3>
        <label>First Name:</label>
        <input
          type="text"
          name="family_info.guardian.first_name"
          value={formData.family_info.guardian.first_name}
          onChange={handleChange}
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
        />

        <label>Relation:</label>
        <input
          type="text"
          name="family_info.guardian.relation"
          value={formData.family_info.guardian.relation}
          onChange={handleChange}
        />

        <label>Occupation:</label>
        <input
          type="text"
          name="family_info.guardian.occupation"
          value={formData.family_info.guardian.occupation}
          onChange={handleChange}
        />

        <label>Office Address:</label>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="family_info.guardian.office_address.street"
            value={formData.family_info.guardian.office_address.street}
            onChange={handleChange}
          />

          <label>Pincode:</label>
          <input
            type="number"
            name="family_info.guardian.office_address.pincode"
            value={formData.family_info.guardian.office_address.pincode}
            onChange={handleChange}
          />

          <label>City:</label>
          <input
            type="text"
            name="family_info.guardian.office_address.city"
            value={formData.family_info.guardian.office_address.city}
            onChange={handleChange}
          />

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

        <label>Contact Number:</label>
        <input
          type="number"
          name="family_info.guardian.contact"
          value={formData.family_info.guardian.contact}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="family_info.guardian.email"
          value={formData.family_info.guardian.email}
          onChange={handleChange}
        />

        <label>Pan Number:</label>
        <input
          type="text"
          name="family_info.guardian.pan_number"
          value={formData.family_info.guardian.pan_number}
          onChange={handleChange}
        />

        <label>Aadhar Number:</label>
        <input
          type="text"
          name="family_info.guardian.aadhar_number"
          value={formData.family_info.guardian.aadhar_number}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default FamilyInfo;
