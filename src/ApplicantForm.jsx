import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import FamilyInfo from "./FamilyInfo";
import AcademicInfo from "./AcademicInfo";
import CourseInfo from "./CourseInfo";

const ApplicantForm = () => {
  const [formData, setFormData] = useState({
    personal_info: {
      present_address: {
        street: "",
        pincode: "",
        city: "",
        district: "",
        state: ""
      },
      permanent_address: {
        street: "",
        pincode: "",
        city: "",
        district: "",
        state: ""
      },
      first_name: "Ankur",
      middle_name: "",
      last_name: "H",
      email: "a@g.com",
      contact: "1234567890",
      gender: "",
      dob: undefined,
      are_adresses_same: false,
      category: "GN",
      blood_group: "B+",
      aadhar_number: "",
      pan_number: ""
    },
    family_info: {
      father: {
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        contact: ""
      },
      mother: {
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        contact: ""
      },
      guardian: {
        office_address: {
          street: "",
          pincode: "",
          city: "",
          district: "",
          state: ""
        },
        first_name: "",
        middle_name: "",
        last_name: "",
        relation: "",
        occupation: "",
        designation: "",
        office_contact: "",
        contact: "",
        income: "",
        email: "",
        pan_number: "",
        aadhar_number: ""
      }
    },
    academic_info: {
      admission: {
        exam_name: "",
        year_of_exam: "",
        roll_number: "",
        rank: ""
      },
      secondary: {
        exam_name: "",
        year_of_exam: "",
        board: "",
        aggregate: "",
        school_name: ""
      },
      higher_secondary: {
        exam_name: "",
        year_of_exam: "",
        board: "",
        aggregate: "",
        school_name: ""
      }
    },
    course_info: {
      enrollment_number: "",
      course_name: "",
      duration: "",
      stream: "",
      admission_year: ""
    }
  });

  const [currentStep, setCurrentStep] = useState(1);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    // Split the name into an array using dot notation to access nested properties
    const nameArray = name.split('.');
  
    // Use reduce to traverse the nested structure and update the state
    setFormData((prevFormData) => {
      let updatedData = { ...prevFormData };
      let currentLevel = updatedData;
  
      for (let i = 0; i < nameArray.length; i++) {
        if (i === nameArray.length - 1) {
          // Update the value at the last level
          currentLevel[nameArray[i]] = value;
        } else {
          // Create nested structures if they don't exist
          currentLevel[nameArray[i]] = { ...currentLevel[nameArray[i]] };
          // Move to the next level
          currentLevel = currentLevel[nameArray[i]];
        }
      }
  
      return updatedData;
    });
  };
  
  const handleNextClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePreviousClick = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo formData={formData} handleChange={handleInputChange} setFormData={setFormData}/>;
      case 2:
        return <FamilyInfo formData={formData} handleChange={handleInputChange} setFormData={setFormData}/>;
      case 3:
        return <AcademicInfo formData={formData} handleChange={handleInputChange} setFormData={setFormData}/>;
      case 4:
        return <CourseInfo formData={formData} handleChange={handleInputChange} setFormData={setFormData}/>;
      default:
        return <div>Error: Invalid step</div>;
    }
  };

  return (
    <div>
      <h1>Student Admission Form</h1>
      {renderStep()}
      <div>
        {currentStep > 1 && (
          <button onClick={handlePreviousClick}>Previous</button>
        )}
        {currentStep < 4 && <button onClick={handleNextClick}>Next</button>}
        {currentStep === 4 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default ApplicantForm;
