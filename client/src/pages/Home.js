import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import {  } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery( {
  //   fetchPolicy: "no-cache"
  // });

  return (
    <div className='search-input'>
      <label for="site-search">Placeholder search for api testing</label>
      <input className='m-2' type="search" id="site-search" name="q" aria-label="Search through site content"/>
      <button>Search</button>
    </div>
  );
};

export default Home;
