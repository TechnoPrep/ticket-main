import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import {  } from '../utils/queries';
import {  } from '../utils/mutations';

const EventSpecific = () => {
  const { loading, data } = useQuery();

  return (
    <>
    </>
  );
};

export default EventSpecific;
