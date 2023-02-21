import React from 'react'
import '../App.css';

const Career = () => {
  return (
    <div className='background-image' style={{ backgroundColor: '#203256' }}>
      <div className='container' >
              <h3 style={{color: 'white'}}>Work With Us</h3>
              <p style={{color: 'white'}}>Please submit your resume for any future opportunity. We select our personnel from our database and trough jobs post on LinkedIn and leading jobs search site.</p>
          <hr />
            <form>
              <label>
                Title:
                <input type="text" name="title" />
              </label>
              <br />
              <label>
                Full Name (Required):
                <input type="text" name="name" />
              </label>
              <br />
              <label>
                City (Required):
                <input type="text" name="city" />
              </label>
              <br />
              <label>
                Country (Required):
                <input type="text" name="city" />
              </label>
              <br />
              <label>
                Phone:
                <input type="number" name="city" />
              </label>
              <br />
              <label>
                Email (Required):
                <input type="email" name="city" />
              </label>
              <br />
              <label>
                Work permit status (Required):
                <input type="text" name="city" />
              </label>
              <br />
              <label>
                Job reference:
                <input type="text" name="city" />
              </label>
              <br />
              <label>
                Positions of interest:
                <input type="text" name="city" />
              </label>
              <br />
              <label>
                Write a cover letter:
                <textarea name="mensaje"></textarea>
              </label>
              <br />
              <button type="submit">Enviar</button>
            </form>
        </div>
    </div> 
  )
}

export default Career