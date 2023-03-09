import React from 'react';
import './careerPage.scss';

const Career = () => {
  const formSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="background-image">
      <div className="container">
        <h3 style={{ color: 'white' }}>Work With Us</h3>
        <p style={{ color: 'white' }}>
          Please submit your resume for any future opportunity. We select our
          personnel from our database and trough jobs post on LinkedIn and
          leading jobs search site.
        </p>
        <hr />
        <form onSubmit={formSubmit}>
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <br />
          <label>
            Full Name (Required):
            <input type="text" name="name" required />
          </label>
          <br />
          <label>
            City (Required):
            <input type="text" name="city" required />
          </label>
          <br />
          <label>
            Country (Required):
            <input type="text" name="country" required />
          </label>
          <br />
          <label>
            Phone:
            <input type="number" name="phone" />
          </label>
          <br />
          <label>
            Email (Required):
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Work permit status (Required):
            <input type="text" name="work-status" required />
          </label>
          <br />
          <label>
            Job reference:
            <input type="text" name="reference" />
          </label>
          <br />
          <label>
            Positions of interest:
            <input type="text" name="positions" />
          </label>
          <br />
          <label>
            Write a cover letter:
            <textarea name="cover-letter"></textarea>
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Career;
