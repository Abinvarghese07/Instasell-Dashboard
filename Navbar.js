import React from 'react';
import {IoSearchOutline} from 'react-icons/io5';
import {IoPersonOutline} from 'react-icons/io5';
import {IoSettingsOutline} from 'react-icons/io5';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoCloseCircleOutline} from 'react-icons/io5';
import { useState } from 'react';



const Navbar = () => {

     const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='p-4 px-16 border-b border-black '>
            <nav className='flex justify-center md:justify-start gap-[500px] font-inter'>
                <ul className='flex justify-start gap-8 text-[14px] font-semibold' >
                    <li className='hover:border-b-1 hover:border-violet-600'>Home</li>
                    <li className='hover:border-b-1 hover:border-violet-600'>Orders</li>
                    <li className='hover:border-b-1 hover:border-violet-600'>Integrations</li>
                    <li className='hover:border-b-1 hover:border-violet-600 hidden md:flex'>Tracking Page</li>
                    <li className='hover:border-b-1 hover:border-violet-600 hidden md:flex'>Partner with Us</li>
                      <div className='md:hidden text-text text-xl flex items-center' onClick={toggleNav}>
                {!isOpen ? <GiHamburgerMenu/> : <IoCloseCircleOutline/> }
                </div>
                </ul>

               

                <ul className='hidden md:flex justify-end gap-8 text-[14px] font-semibold'>
                    <div className='flex gap-3 border-b border-slate-700'>
                        <IoSearchOutline className='text-lg '/>
                        <input placeholder='Search' className='w-[120px]'></input>
                    </div>
                    <div className='flex items-center gap-2'>
                    <IoPersonOutline/>
                    <li>Account</li>

                    </div>
                    <div className='flex items-center gap-2'>
                    <IoSettingsOutline/>
                    <li>Settings</li>


                    </div>
                </ul>
            </nav> 
              
            <ul className={!isOpen? 'hidden' : 'bg-second h-full w-full p-5 border-b border-slate-700 mt-5'} >
                <div className='flex justify-center gap-3 border-b border-slate-700 p-3'>
                        <IoSearchOutline className='text-lg '/>
                        <input placeholder='Search' ></input>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-b border-slate-700 p-3'>
                    <IoPersonOutline/>
                    <li>Account</li>

                    </div>
                    <div className='flex justify-center items-center gap-2 border-b border-slate-700 p-3'>
                    <IoSettingsOutline/>
                    <li>Settings</li>


                    </div>
               


                
            </ul>

            
        </div>
    );
};

export default Navbar;