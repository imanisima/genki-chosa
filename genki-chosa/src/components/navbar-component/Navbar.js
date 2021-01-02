import React, { useState, useEffect } from 'react';
import {Button} from '../button-component/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            げんき ・ 調査
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/genki1-home'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Genki I
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/genki2-home'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Genki II
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {button && <Button buttonStyle='btn--primary'>Contact</Button>}
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;