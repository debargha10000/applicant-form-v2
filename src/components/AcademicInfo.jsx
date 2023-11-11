import React from "react";

const AcademicInfo = ({ formData, handleChange, handleSave, handleNextClick, handlePreviousClick, handleSubmit }) => {
  let year = new Date().getFullYear().toString();
  
  return (
    <div>
      <h2 className="page-title">Academic Information</h2>
      <form onSubmit={handleNextClick}>

        <h3 className="sub-heading">Admission Details</h3> {/* Admission */}
        <div className="grid-col-2"> {/*exam_name year_of_exam */}
          <label>Exam Name:</label>
          <input
            type="text"
            name="academic_info.admission.exam_name"
            value={formData.academic_info.admission.exam_name}
            onChange={handleChange} 
            required
          />

          <label>Year of Exam:</label>
          <input
            type="number"
            name="academic_info.admission.year_of_exam"
            value={formData.academic_info.admission.year_of_exam}
            onChange={handleChange} 
            required
            min={year - 10}
            max={year}
          />          
        </div>
        <div className="grid-col-2"> {/*roll rank */}
          <label>Roll Number:</label>
          <input
            type="text"
            name="academic_info.admission.roll_number"
            value={formData.academic_info.admission.roll_number}
            onChange={handleChange} 
            required
          />

          <label>Rank:</label>
          <input
            type="number"
            name="academic_info.admission.rank"
            value={formData.academic_info.admission.rank}
            onChange={handleChange} 
            required
          />
        </div>

        <h3 className="sub-heading">Secondary Education</h3> {/* Secondary */}
        <label>School Name:</label> {/* school_name */}
        <input
          type="text"
          name="academic_info.secondary.school_name"
          value={formData.academic_info.secondary.school_name}
          onChange={handleChange} 
          required
        />
        <div className="grid-col-2"> {/* exam_name year_of_exam*/}
          <label>Exam Name:</label>
          <input
            type="text"
            name="academic_info.secondary.exam_name"
            value={formData.academic_info.secondary.exam_name}
            onChange={handleChange} 
            required
          />

          <label>Year of Exam:</label>
          <input
            type="number"
            name="academic_info.secondary.year_of_exam"
            value={formData.academic_info.secondary.year_of_exam}
            onChange={handleChange} 
            required
            min={year - 20}
            max={year}
          />          
        </div>
        <div className="grid-col-2"> {/* board aggregate */}
          <label>Board:</label>
          <input
            type="text"
            name="academic_info.secondary.board"
            value={formData.academic_info.secondary.board}
            onChange={handleChange} 
            required
          />

          <label>Aggregate:</label>
          <input
            type="number"
            name="academic_info.secondary.aggregate"
            value={formData.academic_info.secondary.aggregate}
            onChange={handleChange} 
            required
          />
        </div>

        <h3 className="sub-heading">Higher Secondary Education</h3> {/* Higher Secondary */}
        <label>School Name:</label> {/* school_name */}
        <input
          type="text"
          name="academic_info.higher_secondary.school_name"
          value={formData.academic_info.higher_secondary.school_name}
          onChange={handleChange} 
          required
        /> 
        <div className="grid-col-2"> {/* exam_name year_of_exam */}
          <label>Exam Name:</label>
          <input
            type="text"
            name="academic_info.higher_secondary.exam_name"
            value={formData.academic_info.higher_secondary.exam_name}
            onChange={handleChange} 
            required
          />

          <label>Year of Exam:</label>
          <input
            type="number"
            name="academic_info.higher_secondary.year_of_exam"
            value={formData.academic_info.higher_secondary.year_of_exam}
            onChange={handleChange} 
            required
            min={year - 15}
            max={year}
          />
        </div>
        <div className="grid-col-2"> {/* board aggregate */}
          <label>Board:</label>
          <input
            type="text"
            name="academic_info.higher_secondary.board"
            value={formData.academic_info.higher_secondary.board}
            onChange={handleChange} 
            required
          />

          <label>Aggregate:</label>
          <input
            type="number"
            name="academic_info.higher_secondary.aggregate"
            value={formData.academic_info.higher_secondary.aggregate}
            onChange={handleChange} 
            required
          />
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

export default AcademicInfo;
