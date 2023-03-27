import React from 'react';
import logo from './../../assets/images/Logo.svg'
const Navbar = () => {
    return (
        <div className='navbar flex justify-between px-5 py-2 bg-gray-700 text-white'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className='flex gap-5 px-5'>
                    <li>shop</li>
                    <li>order</li>
                    <li>history</li>
                    <li>about</li>
                    <li>cechout</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;