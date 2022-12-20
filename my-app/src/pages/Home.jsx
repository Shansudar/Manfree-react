import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to={'/contact'}>Contact</Link>
      {/* <a href="/contact">Contact</a> */}
    </>
  );
}

export default Home