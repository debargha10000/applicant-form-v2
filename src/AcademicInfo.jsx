import React from "react";

const AcademicInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Academic Information</h2>
      <form>
        <h3>Admission Details</h3>
        <label>Exam Name:</label>
        <input
          type="text"
          name="academic_info.admission.exam_name"
          value={formData.academic_info.admission.exam_name}
          onChange={handleChange}
        />

        <label>Year of Exam:</label>
        <input
          type="number"
          name="academic_info.admission.year_of_exam"
          value={formData.academic_info.admission.year_of_exam}
          onChange={handleChange}
        />

        <label>Roll Number:</label>
        <input
          type="text"
          name="academic_info.admission.roll_number"
          value={formData.academic_info.admission.roll_number}
          onChange={handleChange}
        />

        <label>Rank:</label>
        <input
          type="number"
          name="academic_info.admission.rank"
          value={formData.academic_info.admission.rank}
          onChange={handleChange}
        />

        <h3>Secondary Education</h3>
        <label>Exam Name:</label>
        <input
          type="text"
          name="academic_info.secondary.exam_name"
          value={formData.academic_info.secondary.exam_name}
          onChange={handleChange}
        />

        <label>Year of Exam:</label>
        <input
          type="number"
          name="academic_info.secondary.year_of_exam"
          value={formData.academic_info.secondary.year_of_exam}
          onChange={handleChange}
        />

        <label>Board:</label>
        <input
          type="text"
          name="academic_info.secondary.board"
          value={formData.academic_info.secondary.board}
          onChange={handleChange}
        />

        <label>Aggregate:</label>
        <input
          type="number"
          name="academic_info.secondary.aggregate"
          value={formData.academic_info.secondary.aggregate}
          onChange={handleChange}
        />

        <label>School Name:</label>
        <input
          type="text"
          name="academic_info.secondary.school_name"
          value={formData.academic_info.secondary.school_name}
          onChange={handleChange}
        />

        <h3>Higher Secondary Education</h3>
        <label>Exam Name:</label>
        <input
          type="text"
          name="academic_info.higher_secondary.exam_name"
          value={formData.academic_info.higher_secondary.exam_name}
          onChange={handleChange}
        />

        <label>Year of Exam:</label>
        <input
          type="number"
          name="academic_info.higher_secondary.year_of_exam"
          value={formData.academic_info.higher_secondary.year_of_exam}
          onChange={handleChange}
        />

        <label>Board:</label>
        <input
          type="text"
          name="academic_info.higher_secondary.board"
          value={formData.academic_info.higher_secondary.board}
          onChange={handleChange}
        />

        <label>Aggregate:</label>
        <input
          type="number"
          name="academic_info.higher_secondary.aggregate"
          value={formData.academic_info.higher_secondary.aggregate}
          onChange={handleChange}
        />

        <label>School Name:</label>
        <input
          type="text"
          name="academic_info.higher_secondary.school_name"
          value={formData.academic_info.higher_secondary.school_name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AcademicInfo;
