import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

class Header extends React.Component {

  render() {
    return(
      <div id="header" className="text-center">
        <h1 className="site-title">Crazy News</h1>
        <h2 className="site-subtitle"><i>Toute l'info en un endroit</i></h2> 
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto menu">
              <li className="menu-item">
                <Link to="/">Une des journaux</Link>
              </li>
              <li className="menu-item">
                <Link to="/technologies">Technologie</Link>
              </li>
              <li className="menu-item">
                <Link to="/sciences">Sciences</Link>
              </li>
              <li className="menu-item">
                <Link to="/sante">Santé</Link>
              </li>
              <li className="menu-item">
                <Link to="/business">Business</Link>
              </li>
              <li className="menu-item">
                <Link to="/sport">Sport</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

