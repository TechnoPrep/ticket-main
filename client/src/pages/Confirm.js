import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { ACCOUNT_REG } from "../utils/mutations";

function Confirm() {
  
  const {token} = useParams();

  // Mutation used to set the emailConfirm value to true if token is valid
  const [accountReg, {data, error}] = useMutation(ACCOUNT_REG);

  // Upon page load, execute the query 
  useEffect(() => {
    const handleUpdate = async () => {
      try{
  
        const confirmedUser = await accountReg({
          variables: {
            token: token,
          },
        });
      
      } catch(e){
        console.error(e)
      }
    
    }
  
    handleUpdate();
  },[])

  return (
    <div className="confirm-done">
      <h2>Account Confirmation</h2>
      {data ? (
        <>
        <h3>
          Thank you for confirming your Email Account You may now Login!
        </h3>
       <Link to={'/login'}>
         <button type="button" className="confirm-button">Back to Login</button>
       </Link>
        </>
      ) : (
        <>
        <p>
          Something Went Wrong! Please Try again later!
        </p>
        </>
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

export default Confirm;
