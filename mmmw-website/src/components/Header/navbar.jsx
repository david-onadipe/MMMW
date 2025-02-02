import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import Eventspage from '../../pages/EventsPage/events-page';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isForCouplesDropdownOpen, setIsForCouplesDropdownOpen] = useState(false);
  const [isForSinglesDropdownOpen, setIsForSinglesDropdownOpen] = useState(false);

  const dropIconUP = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>

  const dropIconDown = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleForCouplesDropdown = () => {
    setIsForCouplesDropdownOpen(!isForCouplesDropdownOpen);
  };

  const toggleForSinglesDropdown = () => {
    setIsForSinglesDropdownOpen(!isForSinglesDropdownOpen);
  };

  return (
    <header className='flex flex-col w-full z-50'>
      <nav id="navbar" className='flex flex-row w-full bg-pink h-[5rem]'>
        <div id='mobile-nav' className='flex md2:hidden w-full'>
          <div className='flex w-full px-4 items-center justify-between'>
            <div id="nav-branding" className='flex items-center'>
              <div id="nav-logo" className='mr-3'></div>
              <a id="brand-name" href='/' className='text-lg font-bold text-darkpurple'>
                
                My Marriage Must Work</a>
            </div>

            <button onClick={toggleMobileMenu} className='text-darkpurple'>
              <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="currentColor">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className='fixed inset-0 bg-pink z-50 overflow-y-auto'>
              <div className='flex flex-col h-full'>
                <div className='flex justify-between items-center p-4 border-b'>
                  <div id="nav-branding" className='flex items-center'>
                    <div id="nav-logo" className='mr-3'></div>
                    <a id="brand-name" href="/" className='text-lg font-bold text-darkpurple'>My Marriage Must Work</a>
                  </div>
                  <button onClick={toggleMobileMenu} className='text-darkpurple'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor">
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                  </button>
                </div>

                <ul id="nav-menu" className='flex flex-col p-4 space-y-4'>
                  <li id="nav-item"> 
                    <a href="/about-us" className='block py-2 text-darkpurple font-bold'>About Us</a>
                  </li>

                  <li id="nav-item"> 
                    <a href='/events' className='block py-2 text-darkpurple font-bold'>Events</a>
                  </li>

                  <li id="nav-item" className='flex flex-col'> 
                    <div 
                      className='flex justify-between items-center py-2'
                      onClick={toggleForCouplesDropdown}
                    >
                      <a href="#" className='text-darkpurple font-bold'>For Couples</a>
                      <span>{isForCouplesDropdownOpen ? dropIconUP : dropIconDown}</span>
                    </div>
                    {isForCouplesDropdownOpen && (
                      <div id="service-dropdown" className='pl-4 mt-2'>
                        <ul className='space-y-2 relative'>
                          <li className='flex'><a className=' pb-1 min-w-full pl-3 hover:bg-purple/10' target='_blank' href="https://calendly.com/kemie72/couselling-with-kemi-clone"> Counselling </a></li>

                          <li className='flex relative max-w-[250px]'><a className='pt-3 pb-1 max-w-full pl-3 hover:bg-purple/10 ' href="#"> Vacations / Trips </a>
                          <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                          </li>

                          <li className='flex relative max-w-[250px]'><a className='pt-3 pb-1 min-w-full pl-3 hover:bg-purple/10 ' href="#"> Weddings </a>
                          <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                          </li>

                          <li className='flex relative max-w-[250px]'><a className='pt-3 pb-1 min-w-full pl-3 hover:bg-purple/10 ' href="#"> Finances </a>
                          <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>

                  <li id="nav-item" className='flex flex-col'> 
                    <div 
                      className='flex justify-between items-center py-2'
                      onClick={toggleForSinglesDropdown}
                    >
                      <a href="#" className='text-darkpurple font-bold'>For Singles</a>
                      <span>{isForSinglesDropdownOpen ? dropIconUP : dropIconDown}</span>
                    </div>
                    {isForSinglesDropdownOpen && (
                      <div id="service-dropdown" className='pl-4 mt-2'>
                        <ul className='space-y-2'>

                        <li className='flex'><a className=' pb-1 min-w-full pl-3 hover:bg-purple/10' target='_blank' href="https://calendly.com/kemie72/family-counselling-with-kemi-clone"> Counselling </a></li>

                        <li className='flex relative max-w-[250px]'><a className='pt-3 pb-1 max-w-full pl-3 hover:bg-purple/10 ' href="#"> Vacations / Trips </a>
                        <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                        </li>

                        <li className='flex relative max-w-[250px]'><a className='pt-3 pb-1 min-w-full pl-3 hover:bg-purple/10 ' href="#"> Weddings </a>
                        <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                        </li>

                        <li className='flex relative max-w-[250px]'><a className='pt-3 pb-1 min-w-full pl-3 hover:bg-purple/10 ' href="#"> Finances </a>
                        <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                        </li>

                        </ul>
                      </div>
                    )}
                  </li>
                  

                  <li id="nav-button" className='mt-4'> 
                    <button className='w-full bg-purple text-white rounded-xl p-3'>
                      Inquire Now
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div id='desktop-nav' className='hidden md2:flex max-w-[1500px] w-full px-10 mx-auto items-center z-50'> 
          <div id="nav-branding" className='flex mr-auto'>
            <div id="nav-logo" className='m-auto'> 

            </div >
            <a className=' hidden lg:flex text-xl font-bold h-fit  w-full text-darkpurple' id="brand-name" href="/">My Marriage Must Work</a>

            <a className=' lg:hidden text-lg font-bold h-fit  w-full text-darkpurple' id="brand-name" href="/">My Marriage <br/> Must Work</a>
          </div>

          <ul id="nav-menu" className='flex flex-row ml-auto'> 
            <li id="nav-item" className='flex'> 
              <a className='py-7 h-full w-full text-darkpurple md:px-3 lg:px-5 hover:underline hover:underline-offset-8 hover:decoration-[3px] ' href="/about-us">About Us </a>
            </li>

            <li id="nav-item" className='flex'> 
              <a className='py-7 h-full w-full text-darkpurple md:px-3 lg:px-5 hover:underline hover:underline-offset-8 hover:decoration-[3px]' href="/events">Events </a>
            </li>

            

            <li id='nav-item dropdown-menu' className='flex flex-col md:px-3 lg:px-5 '> 
              <a className='py-7 h-full w-full text-darkpurple flex hover:underline hover:underline-offset-8 hover:decoration-[3px]'>For Couples 
                <span id='drop-icon' className='mt-[5px] ml-2'>{dropIconDown}</span></a>
              <div id="service-dropdown " className='relative'>
                <ul id='submenu' className='absolute left-0 w-[175px] bg-pink rounded-xl shadow-2xl'>
                <li className='flex'><a className='pt-6 pb-3 min-w-full pl-3 hover:bg-purple/10' target='_blank' href="https://calendly.com/kemie72/couselling-with-kemi-clone"> Counselling </a></li>

                <li className='flex relative'><a className='pt-6 pb-3 min-w-full pl-3 hover:bg-purple/10 ' href="#"> Vacations / Trips </a>
                <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                </li>

                <li className='flex relative'><a className='pt-6 pb-3 min-w-full pl-3 hover:bg-purple/10 ' href="#"> Weddings </a>
                <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                </li>

                <li className='flex relative'><a className='pt-6 pb-3 min-w-full pl-3 hover:bg-purple/10 ' href="#"> Finances </a>
                <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                </li>

                </ul>
              </div>
            </li>

            <li id='nav-item dropdown-menu' className='flex flex-col md:px-3 lg:px-5 '> 
              <a className='py-7 h-full w-full text-darkpurple flex hover:underline hover:underline-offset-8 hover:decoration-[3px]'>For Singles 
                <span id='drop-icon' className='mt-[5px] ml-2'>{dropIconDown}</span></a>
              <div id="service-dropdown " className='relative'>
                <ul id='submenu' className='absolute left-0 w-[175px] bg-pink rounded-xl shadow-2xl'>

                  <li className='flex'><a className='pt-6 pb-3 min-w-full pl-3 hover:bg-purple/10' target='_blank' href="https://calendly.com/kemie72/family-counselling-with-kemi-clone"> Counselling </a></li>

                  <li className='flex relative'><a className='pt-6 pb-3 min-w-full pl-3 hover:bg-purple/10 ' href="#"> Match-Making </a>
                  <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                  </li>
                  
                  <li className='flex relative'><a className='pt-6 pb-3 min-w-full pl-3 hover:bg-purple/10 ' href="#"> Finances </a>
                  <p className='absolute bg-purple text-white rounded-full  text-center px-2 py-[2px] w-max right-[20px] text-xs top-[9px] font-bold opacity-[70%] '> Coming Soon</p>
                  </li>
                  
                </ul>
              </div>
            </li>

            

            <li id="nav-button" className='flex'> 
              <button href="#" className='bg-purple text-white rounded-xl md:ml-3 lg:ml-5 p-3 m-auto shadow-xl hover:shadow-2xl '>Inquire Now </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
