import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { ACCOUNT_REG } from "../utils/mutations";

function Confirm() {
  
  const {token} = useParams();

  const [accountReg] = useMutation(ACCOUNT_REG);


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

  return (
    <div className="container my-1">
      <h2>Signup</h2>
      <p>
        Thank you for confirming your Email Account You may now Login!
      </p>
      <Link to='/login'>
      <button type="button" className="btn btn-info">Button</button>
      </Link>
    </div>
  );
}

export default Confirm;
