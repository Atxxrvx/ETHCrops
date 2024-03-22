import React from 'react';
import '../css/Navbar.css';
import Avatar from '@mui/material/Avatar';
import AccountMenu from './profile';

const Navbar = () => {
  
  return (
    <nav className="bg-transparent bg-opacity-50 fixed top-0 w-full pt-6 z-50 flex justify-center items-center backdrop-blur-sm pb-6 mb-[100px] shadow ">
        <div className="p-3 text-[30px]   ">
                <img className='w-[300px]' src="https://i.ibb.co/Yk9f6ZH/logo.png" alt="ETHCrops" />
            </div>
        
      <div className="container mx-auto py-4">
        <ul className="flex justify-center align-middle">
          <li className="mr-6">
            <a href="#" className="text-black hover:text-yellow-500 transition duration-300 mr-[50px]">Home</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-black hover:text-yellow-500 transition duration-300 mr-[50px]">Claims</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-black hover:text-yellow-500 transition duration-300 mr-[50px]">Incentives</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-yellow-500 transition duration-300 mr-[50px]">Contact</a>
          </li>
        </ul>
      </div>
      <div className=' justify-end mr-[50px]'>
        {/* <button>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </button>
           */}
           <AccountMenu />
      </div>
    </nav>
  );
}

export default Navbar;
