import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header d-flex bg-light">
      <div className="content d-flex">
        <a href="#" className="logo">
          <img src={require('../../img/logo.webp')} alt="logo" className="img-tumbnail"/>
        </a>
        <div className="searchBar d-flex">
          <input type="search" name="search" size="80"/>
          <button type="submit" value="submit" className="bg-success">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="account d-flex">
          <a href="#"><i className="fas fa-shopping-cart"></i></a>
          <a href="#"><i className="fas fa-user-alt ml-3"></i></a>
          <a href="#"><span className="ml-2">Log in</span></a>
          <a href="#"><span className="ml-2">Sing up</span></a>
        </div>
      </div>
    </div>
  )
}