import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {  } from '../utils/queries';

const UserProfile = () => {
  const { loading, data } = useQuery( {
    fetchPolicy: "no-cache"
  });


  return (
    <>
    </>
  );
};

export default UserProfile;
