import React from 'react';
import Logo from '../assets/logo.png';
const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
      <a href="">
        <h3 className='text-4xl text-white font-bold'>Eshaan Tanzim</h3>
      </a>
      {/* button  */}
      <button className='btn btn-sm'>See My Portfolio</button>
      </div>
    </div>
  </header>;
};

export default Header;
