import React from "react";
import "./developerspace.css";
import author2 from "../profiles/student1.jpg";
import author1 from "../profiles/student2.jpeg";
import author3 from "../profiles/mentor1.jpeg";
import author4 from "../profiles/mentor2.jpg";
import { Link } from "react-router-dom";

const developerspace = () => {
  return (
    <div>
      <strong>
        <Link to="/">Home</Link>
      </strong>

      <div>
        <h1>Students</h1>
      </div>
      <div>
        <div className="profile-container">
          <div className="profile-card">
            <div>
              <h2>Student 1</h2>
            </div>
            <img src={author1} alt="Profile 2" />
            <div className="profile-details">
              <h2>Author 1</h2>
              <p>
                <strong>author1@example.com</strong>
              </p>
              <p>Affiliation 1</p>
            </div>
          </div>
          <div className="profile-card">
            <div>
              <h2>Student 2</h2>
            </div>
            <img src={author2} alt="Profile 1" />
            <div className="profile-details">
              <h2>Author 2</h2>
              <p>
                <strong>author2@example.com</strong>
              </p>
              <p>Affiliation 2</p>
            </div>
          </div>
        </div>
        <div>
          <h1>Mentors</h1>
        </div>
        <div className="profile-container">
          <div className="profile-card">
            <div>
              <h2>Mentor 1</h2>
            </div>
            <img src={author3} alt="Profile 3" />
            <div className="profile-details">
              <h2>Author 3</h2>
              <p>
                <strong>author3@example.com</strong>
              </p>
              <p>Affiliation 3</p>
            </div>
          </div>
          <div className="profile-card">
            <div>
              <h2>Mentor 2</h2>
            </div>
            <img src={author4} alt="Profile 4" />
            <div className="profile-details">
              <h2>Author 4</h2>
              <p>
                <strong>author4@example.com</strong>
              </p>
              <p>Affiliation 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default developerspace;
