import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {

  console.log('home');


  return (
    <>
      <IconContext.Provider value={{ color: ' #3bcc63cf;' }}>

        <nav className={'nav-menu active'}>

          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
            </li>
            <li className='nav-text'>
              <Link to='/'>
                <AiIcons.AiFillHome />
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
