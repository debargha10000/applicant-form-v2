import React from "react";

const CourseInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Course Information</h2>
      <form>
        <label>Enrollment Number:</label>
        <input
          type="text"
          name="course_info.enrollment_number"
          value={formData.course_info.enrollment_number}
          onChange={handleChange}
        />

        <label>Course Name:</label>
        <input
          type="text"
          name="course_info.course_name"
          value={formData.course_info.course_name}
          onChange={handleChange}
        />

        <label>Duration:</label>
        <input
          type="number"
          name="course_info.duration"
          value={formData.course_info.duration}
          onChange={handleChange}
        />

        <label>Stream:</label>
        <select
          name="course_info.stream"
          value={formData.course_info.stream}
          onChange={handleChange}
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
        />
      </form>
    </div>
  );
};

export default CourseInfo;
