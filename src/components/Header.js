import React from 'react';
import Button from '@material-ui/core/Button';
import BrandLogo from '../images/app_logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <>
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg_white fixed-top">
            <div className="container">
              <NavLink to="/"  className="navbar-brand pt-0 "><img src={BrandLogo} /></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item">
        <NavLink to="/" exact activeClassName="active" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active"  to="/about-us" className="nav-link">About Us</NavLink>
      </li>
      <li className="nav-item">
       <NavLink exact activeClassName="active" className="nav-link" to="/manage-users">Manage Users</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <NavLink to="/add-users">
      <Button variant="contained" color="primary">
        Add Users
      </Button>
      </NavLink>
    
    </form>
  </div>
  </div>
</nav>
</header>
        </>
    )
}

export default Header;