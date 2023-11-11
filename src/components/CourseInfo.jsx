import React from "react";

const CourseInfo = ({ formData, handleChange, handleSave, handleNextClick, handlePreviousClick, handleSubmit }) => {
  let year = new Date().getFullYear().toString();
  
  return (
    <div>
      <h2 className="page-title">Course Information</h2> 
      <form onSubmit={handleSubmit}>
        <label>Enrollment Number:</label> {/* enrollment no */}
        <input
          type="text"
          name="course_info.enrollment_number"
          value={formData.course_info.enrollment_number}
          onChange={handleChange}
          required
        />
        <div className="grid-col-2"> {/* course duration */}
          <label>Course Name:</label>
          <input
            type="text"
            name="course_info.course_name"
            value={formData.course_info.course_name}
            onChange={handleChange}
            required
          />

          <label>Duration:</label>
          <input
            type="number"
            name="course_info.duration"
            value={formData.course_info.duration}
            onChange={handleChange}
            required
            min="1"
            max="10"
          />
        </div>
        <div className="grid-col-2"> {/* stream admission_year */}
          <label>Stream:</label>
          <select
            name="course_info.stream"
            value={formData.course_info.stream}
            onChange={handleChange}
            required
          >
            <option value="">Select Stream</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>

          <label>Admission Year:</label>
          <input
            type="number"
            name="course_info.admission_year"
            value={formData.course_info.admission_year}
            onChange={handleChange}
            required
            min={year-10}
            max={year}
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseInfo;
