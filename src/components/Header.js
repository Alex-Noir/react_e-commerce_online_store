import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="container-fluid bg-light">
      <div className="row no-gutters">
        <div className="col-1 ml-5">
          <a href="#"><img src={require('../img/logo.png')} alt="logo" className="img-tumbnail"/></a>
        </div>
        <div className="col-8 mt-2 ml-5">
          <input type="search" name="search" size="130"/>
          <button type="submit" value="submit" className="bg-success">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="col-1 mt-2 ml-4">
          <a href="#"><i className="fas fa-shopping-cart"></i></a>
          <a href="#"><i className="fas fa-user-alt ml-3"></i></a>
          <a href="#"><span className="ml-2">Log in</span></a>
          <a href="#"><span className="ml-2">Sing up</span></a>

        </div>
      </div>
    </div>
  )
}