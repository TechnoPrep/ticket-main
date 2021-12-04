import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { ACCOUNT_REG } from "../utils/mutations";

function Confirm() {
  
  const {token} = useParams();

  const [accountReg, {data, error}] = useMutation(ACCOUNT_REG);


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

  window.onload = function() {
    handleUpdate();
  }

  // if(data){
  //   return (
  //     <div className="container">
  //      <h2>Account Confirmation</h2>
  //      <p>
  //        Thank you for confirming your Email Account You may now Login!
  //      </p>
  //      <Link to={'/login'}>
  //      <button type="button" className="btn btn-info">Button</button>
  //      </Link>
  //     </div>
  //   )
  // }

  return (
    <div className="container my-1">
      <h2>Account Confirmation</h2>
      {data ? (
        <>
        <p>
          Thank you for confirming your Email Account You may now Login!
        </p>
       <Link to={'/login'}>
         <button type="button" className="btn btn-info">Button</button>
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
