import React from 'react'
// import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'

function Signup() {
  return (
    <>
    <div className='signUp'>
    <form action="">
      <h2>Sign Up</h2>
      <div class="form-group fullname">
        <label for="fullname">Full Name</label>
        <input type="text" id="fullname" placeholder="Enter your full name"/>
      </div>
      <div class="form-group email">
        <label for="email">Email Address</label>
        <input type="text" id="email" placeholder="Enter your email address"/>
      </div>
      <div class="form-group password">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password"/>
        <i id="pass-toggle-btn" class="fa-solid fa-eye"></i>
      </div>
      <div class="form-group date">
        <label for="date">Birth Date</label>
        <input type="date" id="date" placeholder="Select your date"/>
      </div>
      <div class="form-group gender">
        <label for="gender">Gender</label>
        <select id="gender">
          <option value="" selected disabled>Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group submit-btn">
        <input type="submit" value="Submit" onClick={() => toast.success("You have Sucessfully signed up")}/>
      </div>
    </form>
    </div>
    
    </>
  )
}

export default Signup