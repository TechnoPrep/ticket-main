import React, { useEffect } from "react";

import { useParams } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { ACCOUNT_REG } from "../utils/mutations";

function Confirm() {
  
  const {token} = useParams();
  const [accountReg, {loading, data}] = useMutation(ACCOUNT_REG);

  console.log(token);

  useEffect(() => {
    accountReg(token);
  })

  return (
    <div className="container my-1">
      <h2>Signup</h2>
      <p>
        Please check your email to confirm your account
      </p>
    </div>
  );
}

export default Confirm;
