import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg'


const Nav = () => {

return (
  <nav>
    <div className="nav_container">
        <a href="/">
          <img src= {LibraryLogo} alt="" className='logo' />
        </a>
        <ul className='nav_links'>
            <li className='nav_list'>
                <a href="/" className='nav_link'>
                Home
                </a>
            </li>
            <li className='nav_list'>
                <a href="/" className='nav_link'>
                Books
                </a>
            </li>
            <button className='btn_menu'>
                <FontAwesomeIcon icon="bars"/>
            </button>
        </ul>
    </div>
  </nav>
)

};

export default Nav;

