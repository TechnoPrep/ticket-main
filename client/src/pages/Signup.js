import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Validate from "../utils/validators";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({
    firstName: "a",
    lastName: "",
    zipCode: "",
    email: "",
    password: "",
    confirm: "",
    isSubmitted: false
  });

  const [errorMsg, setErrorMsg] = useState({
    fName: false,
    lName: false,
    zipCode: false,
    email: false,
    passLen: false,
    passMatch: false
  })

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const [validFName, validLName, validZip, validEmail, validLen, match] = await Promise.all([
      Validate.isNotEmpty(formState.firstName),
      Validate.isNotEmpty(formState.lastName),
      Validate.isZipCode(formState.zipCode),
      Validate.isEmail(formState.email),
      Validate.passLen(formState.password),
      Validate.passMatch(formState.password, formState.confirm)
    ])

    setErrorMsg({
      fName: validFName,
      lName: validLName,
      zipCode: validZip,
      email: validEmail,
      passLen: validLen,
      passMatch: match
    })

    setFormState({
      ...formState,
      password: '',
      confirm: '',
      isSubmitted: true
    });
    
  };

  useEffect(() => {
    const validateAndAdd = async () => {
      if(
        errorMsg.fName &&
        errorMsg.lName &&
        errorMsg.zipCode &&
        errorMsg.email &&
        errorMsg.passLen &&
        errorMsg.passMatch
        ) {
        try{
  
          const mutationResponse = await addUser({
            variables: {
              firstName: formState.firstName,
              lastName: formState.lastName,
              zipCode: formState.zipCode,
              email: formState.email,
              password: formState.password,
            },
          });
        
        } catch(e){
          console.error(e)
        }  
  
      }
    }

    validateAndAdd();
      
  }, [errorMsg])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signup-box">
      <h2 className='signup-header'>Signup</h2>
      {data ? (
          <div className="signup-confirm">
            <p>{formState.firstName}'s Ticket Buying Experience is One Step Away! </p>
            <br/>
            <p>Please Check {formState.email} For a Confirmation Link! </p>
          </div>
      ) : (
        <form className='signup-form' onSubmit={handleFormSubmit}>
          <div className="flex-row space-between">
            <label className='signup-label' htmlFor="firstName">First Name</label>
            <input
              className='form-input'
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
            {
              !errorMsg.fName && formState.isSubmitted ? 
                (<div className='text-danger'> Please enter your First Name </div>) 
                  : 
                <div></div> 
            }
          </div>
          <div className="flex-row space-between">
            <label className='signup-label' htmlFor="lastName">Last Name</label>
            <input
              className='form-input'
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
            {
              !errorMsg.lName && formState.isSubmitted ? 
                (<div className='text-danger'> Please enter your Last Name </div>) 
                  : 
                <div></div> 
            }
          </div>
          <div className="flex-row space-between">
            <label className='signup-label' htmlFor="zipCode">Zip Code</label>
            <input
              className='form-input'
              placeholder="Zip Code"
              name="zipCode"
              type="zipCode"
              id="zipCode"
              onChange={handleChange}
            />
            {
              !errorMsg.zipCode && formState.isSubmitted ? 
                (<div className='text-danger'> Please enter a valid US Zip Code </div>) 
                  : 
                <div></div> 
            }
          </div>
          <div className="flex-row space-between">
            <label className='signup-label' htmlFor="email">Email</label>
            <input
              className='form-input'
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
            {
              !errorMsg.email && formState.isSubmitted ? 
                (<div className='text-danger'> Please enter a valid Email </div>) 
                  : 
                <div></div> 
            }
          </div>
          <div className="flex-row space-between">
            <label className='signup-label' htmlFor="password">Password</label>
            <input
              className='form-input'
              placeholder="******"
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              value={formState.password}
            />
            {
              !errorMsg.passLen && formState.isSubmitted ? 
                (<div className='text-danger'> Password must be longer than 8 Characters </div>) 
                  : 
                <div></div> 
            }
          </div>
          <div className="flex-row space-between">
            <label className='signup-label' htmlFor="confirm">Confirm Password</label>
            <input
              className='form-input'
              placeholder="******"
              name="confirm"
              type="password"
              id="confirm"
              onChange={handleChange}
              value={formState.confirm}
            />
            {
              !errorMsg.passMatch && formState.isSubmitted ? 
                (<div className='text-danger'> Passwords Do Not Match </div>) 
                  : 
                <div></div> 
            }
          </div>
          
          <div className="signup-btn flex-row space-between">
            <button className='submit-btn' type="submit">Submit</button>
          </div>
        </form>
        )
      }
      
       {error && (
         <div className="my-3 p-3 bg-danger text-white">
           {error.message}
         </div>
       )}
      </div>
      

  );
}

export default Signup;
