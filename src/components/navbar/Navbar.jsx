import React from 'react';
import './Navbar.css';
import SearchIcon from '../../assets/Search Icon.svg';

import Button from '../button/Button';
const Navbar = () => {
  return (
    <div className="Navbar ">
      <div className="NavbarContainer flex ">
        <h1 className="Logo">EDYODA</h1>
        <div className="NavLinks flex">
          <div className=" NavButton flex">
            <Button btnText="Courses" />
            <Button btnText="Programs" />
          </div>
          <div className="NavButton flex">
            <img id="SearchIcon" src={SearchIcon} alt="" />
            <span>Log in</span>
            <button className="JoinBtn">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
