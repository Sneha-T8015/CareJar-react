import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ onNavbarClick }) {
  const handleItemClick = (component) => {
    onNavbarClick(component);
  };

  return (
    <nav className="fixed  z-10 bg-black bg-blend-luminosity backdrop-blur-md bg-opacity-60 rounded-lg">
      
      <div className="flex justify-between w-full gap-2 lg:gap-[220px]  px-12 items-center flex-row text-lg text-white lg:flex-row flex-col font-bold py-5">
      <div className=''>
      Book Your Appointments Here..
      </div>
        <div className="flex items-center lg:space-x-12 space-x-8 text-md  text-teal-200">
          
          <Link
            to="/"
            className="text-white hover:text-indigo-200"
            onClick={() => handleItemClick('header')}
          >
            Home
          </Link>
          <Link
            to="/doctor"
            className="text-white hover:text-indigo-200"
            onClick={() => handleItemClick('doctor')}
          >
            Doctors
          </Link>
        </div>
      </div>
    </nav>
  );
}
