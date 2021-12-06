import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { FORGOTPW } from "../utils/mutations";

function ForgotPassword() {
  
  const [formState, setFormState] = useState({
    email: "",
    isSubmitted: false,
  });

  const [findUser, {error}] = useMutation(FORGOTPW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try{

      await findUser({
        variables: {
          email: formState.email,
        },
      });
    
    } catch(e){
      console.error(e)
    }

    setFormState({
      email: '',
      isSubmitted: true,
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
      <h2 className='signup-header'>Forgot Password?</h2>
      {formState.isSubmitted ? (
        <p style={{color: 'white'}}>
          Thank you! And Email has been sent to reset your Password!
        </p>
      ) : (
      <form className='signup-form' onSubmit={handleFormSubmit}>
        <div className="flex-row space-between">
          <label className='signup-label' htmlFor="email">Email:</label>
          <input
            className='form-input'
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="signup-btn flex-row space-between">
          <button className='submit-btn' type="submit">Submit</button>
        </div>
      </form>
      )}

      {error && (
         <div className="my-3 p-3 bg-danger text-white">
           {error.message}
         </div>
       )}
      </div>
  );
}

export default ForgotPassword;
