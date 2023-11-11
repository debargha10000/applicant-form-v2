import React, { useState } from "react";

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    personal_info: {
      first_name: ""
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      personal_info: {
        ...prevFormData.personal_info,
        [name]: value
      }
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Your form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input
        type="text"
        name="personal_info.first_name"
        value={formData.personal_info.first_name}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default YourFormComponent;
