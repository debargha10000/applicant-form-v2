import React, { useState, useEffect } from "react";
import PersonalInfo from "./PersonalInfo";
import FamilyInfo from "./FamilyInfo";
import AcademicInfo from "./AcademicInfo";
import CourseInfo from "./CourseInfo";

const ApplicantForm = () => {

  window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };
  // window.confirm =()=>{
  //   return "Press Ok only if you have saved your changes"
  // }
  // initial state of the form
  const initialFormData = {
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
  }
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    // Load saved form data from local storage on component mount
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  //steps in the form
  const [currentStep, setCurrentStep] = useState(1);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // handles the change in the form input fields
  const handleChange = (event) => {
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

  const handleSave = () => {
    // Save form data to local storage when the SAVE button is pressed
    localStorage.setItem('formData', JSON.stringify(formData));
  };
  
  // function to move to the next page
  const handleNextClick = (event) => {
    event.preventDefault(); 
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // function to move to the previous page
  const handlePreviousClick = (event) => {
    event.preventDefault(); 
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // function to submit the form
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Form submitted:", formData);
  };

  // const renderStep = () => {
  //   switch (currentStep) {
  //     case 1:
  //       return <PersonalInfo formData={formData} handleChange={handleChange} handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} handleSubmit={handleSubmit}/>;
  //     case 2:
  //       return <FamilyInfo formData={formData} handleChange={handleChange} handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} handleSubmit={handleSubmit}/>;
  //     case 3:
  //       return <AcademicInfo formData={formData} handleChange={handleChange} handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} handleSubmit={handleSubmit}/>;
  //     case 4:
  //       return <CourseInfo formData={formData} handleChange={handleChange} handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} handleSubmit={handleSubmit}/>;
  //     default:
  //       return <div>Error: Invalid step</div>;
  //   }
  // };

  // all the pages with all the prop functions
  const renderStep = [

      <PersonalInfo 
        formData={formData} 
        handleChange={handleChange} 
        handleNextClick={handleNextClick} 
        handlePreviousClick={handlePreviousClick} 
        handleSubmit={handleSubmit}
        handleSave={handleSave}
      />,
      <FamilyInfo 
        formData={formData} 
        handleChange={handleChange} 
        handleNextClick={handleNextClick} 
        handlePreviousClick={handlePreviousClick} 
        handleSubmit={handleSubmit}
        handleSave={handleSave}
      />,
      <AcademicInfo 
        formData={formData} 
        handleChange={handleChange} 
        handleNextClick={handleNextClick} 
        handlePreviousClick={handlePreviousClick} 
        handleSubmit={handleSubmit}
        handleSave={handleSave}
      />,
      <CourseInfo 
        formData={formData} 
        handleChange={handleChange} 
        handleNextClick={handleNextClick} 
        handlePreviousClick={handlePreviousClick} 
        handleSubmit={handleSubmit}
        handleSave={handleSave}
      />,

  ]


  return (
    <div className="form-container">
      <h1 className="form-heading">Applicant Form</h1>

      <div className="form-content">
        {/* displaying the pages from the array according to the page number */}
        {renderStep[currentStep-1]}
      </div>

      {/* <div>
        {currentStep > 1 && (
          <button onClick={handlePreviousClick}>Previous</button>
        )}
        {currentStep < 4 && <button onClick={handleNextClick}>Next</button>}
        {currentStep === 4 && <button onClick={handleSubmit}>Submit</button>}
      </div> */}
    </div>
  );
};

export default ApplicantForm;


// sample submitted form data--
/*

{
    "personal_info": {
        "present_address": {
            "street": "dasw",
            "pincode": "100000",
            "city": "sadcfesa",
            "district": "scfaw",
            "state": "scfaw"
        },
        "permanent_address": {
            "street": "",
            "pincode": "",
            "city": "",
            "district": "",
            "state": ""
        },
        "first_name": "Ankur",
        "middle_name": "",
        "last_name": "H",
        "email": "a@g.com",
        "contact": "1234567890",
        "gender": "Male",
        "dob": "2023-10-30",
        "are_adresses_same": false,
        "category": "GN",
        "blood_group": "B+",
        "aadhar_number": "123456789123",
        "pan_number": "1000000000"
    },
    "family_info": {
        "father": {
            "first_name": "scde",
            "middle_name": "",
            "last_name": "sdce",
            "email": "",
            "contact": ""
        },
        "mother": {
            "first_name": "dsc",
            "middle_name": "",
            "last_name": "dcs",
            "email": "",
            "contact": ""
        },
        "guardian": {
            "office_address": {
                "street": "",
                "pincode": "",
                "city": "",
                "district": "",
                "state": ""
            },
            "first_name": "dsc",
            "middle_name": "",
            "last_name": "dsce",
            "relation": "sdc",
            "occupation": "dsc",
            "designation": "aswd",
            "office_contact": "1234567890",
            "contact": "1234567890",
            "income": "1000",
            "email": "dcs@s",
            "pan_number": "7418500000",
            "aadhar_number": "123456789123"
        }
    },
    "academic_info": {
        "admission": {
            "exam_name": "vdsrf",
            "year_of_exam": "2013",
            "roll_number": "1",
            "rank": "1"
        },
        "secondary": {
            "exam_name": "1",
            "year_of_exam": "2003",
            "board": "1",
            "aggregate": "1",
            "school_name": "1"
        },
        "higher_secondary": {
            "exam_name": "1",
            "year_of_exam": "2008",
            "board": "1",
            "aggregate": "1",
            "school_name": "1"
        }
    },
    "course_info": {
        "enrollment_number": "12021002022056",
        "course_name": "ef",
        "duration": "1",
        "stream": "Science",
        "admission_year": "2013"
    }
}

*/