import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { ACCOUNT_REG } from "../utils/mutations";

function Confirm() {
  
  const {token} = useParams();

  // const [tokenState, setTokenState] = useState({
  //   token: "",
  // })

  const [accountReg] = useMutation(ACCOUNT_REG);

  // setTokenState({
  //   token: token
  // });

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
  
    // setTokenState({
    //   token: '',
    // });
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
    </div>
  );
}

export default Confirm;
