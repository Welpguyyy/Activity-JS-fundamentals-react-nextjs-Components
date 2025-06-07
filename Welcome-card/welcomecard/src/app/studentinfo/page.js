"use client";
import "./student.css";
//importing use state from react
import { useState } from "react";

//a student object to where i can store the student details
export default function Countterr() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    major: "",
    email: ""
  });
//event handler for storing inputted data to variables
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  //an event handler for the submit button, it creates an alert 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
        `Student Information:\n\n` +
    `Name: ${student.name}\n` +
    `Age: ${student.age}\n` +
    `Major: ${student.major}\n` +
    `Email: ${student.email}`
    )
  };

  return (
    <form className="student-box" onSubmit={handleSubmit}>
      <h2>Student Details</h2>
      <label>
        Name:
        <input type="text" name="name" value={student.name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={student.age} onChange={handleChange} />
      </label>
      <label>
        Major:
        <input type="text" name="major" value={student.major} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={student.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
