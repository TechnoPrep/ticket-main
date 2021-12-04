import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Validate from "../utils/validators";
import { useMutation } from "@apollo/client";

import { RESETPW } from "../utils/mutations";

function ResetPassword() {
  
  const {token} = useParams();

  const [formState, setFormState] = useState({
    password: "",
    confirm: "",
    isSubmitted: false
  });

  const [errorMsg, setErrorMsg] = useState({
    passLen: false,
    passMatch: false
  })

  const [resetPW, { error, data }] = useMutation(RESETPW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const validLen = await Validate.passLen(formState.password)
    const match = await Validate.passMatch(formState.password, formState.confirm)

    setErrorMsg({
      passLen: validLen,
      passMatch: match
    })

    console.log(errorMsg);
    console.log(formState);

    if( 
       validLen &&
       match
        ){
      
      try{

        console.log('I Worked!');

        const mutationResponse = await resetPW({
          variables: {
            token: token,
            password: formState.password,
          },
        });

        console.log(mutationResponse);
      
      } catch(e){
        console.error(e)
      }
    }

    setFormState({
      password: '',
      confirm: '',
      isSubmitted: true
    });
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  if(data){
    return (
      <div className="signup-box">
        <h2 className='signup-header'>Password Reset</h2>
        <p> Your Password has been successfully reset! Please Login!</p>
        <Link to='/login'>
        <button className='submit-btn' type="submit" >Log In</button>
        </Link>
      </div>
    )
  }

  return (
    <div className="signup-box">
      <h2 className='signup-header'>Password Reset</h2>
        <form className='signup-form' onSubmit={handleFormSubmit}>
          <div className="flex-row space-between">
            <label htmlFor="password">Password:</label>
            <input
              className='form-input'
              placeholder="******"
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              value={formState.password}
            />
          </div>
          {
            !errorMsg.passLen && formState.isSubmitted ? 
              (<div className='text-danger'> Password must be longer than 8 Characters </div>) 
                : 
              <div></div> 
          }
          <div className="flex-row space-between">
            <label htmlFor="confirm">Confirm Password:</label>
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
            !errorMsg.match && formState.isSubmitted ? 
              (<div className='text-danger'> Passwords Do Not Match </div>) 
                : 
              <div></div> 
            }
          </div>
          <div className="signup-btn flex-row space-between">
            <button className='submit-btn' type="submit" >Submit</button>
          </div>
        </form>
       
       {error && (
         <div className="my-3 p-3 bg-danger text-white">
           {error.message}
         </div>
       )}
      </div>
  );
}

export default ResetPassword;
