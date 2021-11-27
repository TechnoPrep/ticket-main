import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import Validate from "../utils/validators";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    zipCode: "",
    email: "",
    password: "",
    // confirm: "",
  });

  const [addUser] = useMutation(ADD_USER);

  let submitted = false;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

      const mutationResponse = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          phone: formState.phone,
          zipCode: formState.zipCode,
          email: formState.email,
          password: formState.password,
          // ...formState
        },
      });
    
    alert(`Please check your email ${formState.email} to confirm your account`)
      
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    !submitted ? <div className="container my-1">
      <h2>Signup</h2>
      
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="Phone">Phone#:</label>
          <input
            placeholder="555-555-5555"
            name="phone"
            type="phone"
            id="phone"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            placeholder="Zip Code"
            name="zipCode"
            type="zipCode"
            id="zipCode"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            placeholder="******"
            name="confirm"
            type="password"
            id="confirm"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>

      :
        
        <div className="container my-1">
          <h2>Signup</h2>
          <p>
            Please check your email {formState.email} to confirm your account
          </p>
        </div>

  );
}

export default Signup;
