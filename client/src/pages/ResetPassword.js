import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Validate from "../utils/validators";
import { useMutation } from "@apollo/client";

import { RESETPW } from "../utils/mutations";

function ResetPassword() {
  
  const {token} = useParams();

  const [formState, setFormState] = useState({
    password: "",
    confirm: "",
  });

  const [resetPW, { error }] = useMutation(RESETPW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const validatePass = Validate.Pass(formState.password, formState.confirm)

    if(!validatePass){
      setFormState({
        password: '',
        confirm: ''
      });
      return
    }

    try{

      const mutationResponse = await resetPW({
        variables: {
          token: token,
          password: formState.password,
        },
      });
    
    } catch(e){
      console.error(e)
    }

    setFormState({
      password: '',
      confirm: ''
    });
    
  };

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
        </div>
        
        <div className="signup-btn flex-row space-between">
          <button className='submit-btn' type="submit">Submit</button>
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
