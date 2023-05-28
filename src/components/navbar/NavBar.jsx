import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className='gradient-bg'>
      <Link to="section1" id="#logo" className='logo-text'>Polytech-Intl</Link>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeLink === 'section1' ? 'active' : ''}
          >
            Users Infos
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeLink === 'section2' ? 'active' : ''}
          >
            Currencies Rates
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeLink === 'section3' ? 'active' : ''}
          >
            Crypto Rates
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActive}
            className={activeLink === 'section4' ? 'active' : ''}
          >
            Data visualization
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;