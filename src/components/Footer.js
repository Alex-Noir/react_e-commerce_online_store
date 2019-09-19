import React from 'react';
import { StyledFooter, StyledUlFooterList, StyledDivFooter } from './styles';

export default function Footer() {
  return (
    <footer className="d-flex bg-dark mt-auto justify-content-center">
      <StyledUlFooterList className="list-group list-group-flush">
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
      </StyledUlFooterList>
      <StyledUlFooterList className="list-group list-group-flush">
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
      </StyledUlFooterList>
      <StyledUlFooterList className="list-group list-group-flush">
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
        <li className="list-group-item bg-dark p-0">
          <a href="#" className="text-warning nav-link">Lorem insum bla bla</a>
        </li>
      </StyledUlFooterList>
      <StyledDivFooter>
        <form className="float-left">
          <label for="email" className="text-light">Subscribe on the news!
            <input type="email" size="27" />
            <input type="submit" value="Submit"></input>
          </label>
        </form>
        <div className="text-light">
          <div>Our social media:</div>
          <a href="#" className="text-light mr-2"><i class="fab fa-facebook-square fa-2x"></i></a>
          <a href="#" className="text-light mr-2"><i class="fab fa-twitter-square fa-2x"></i></a>
          <a href="#" className="text-light mr-2"><i class="fab fa-instagram fa-2x"></i></a>
          <a href="#" className="text-light mr-2"><i class="fab fa-youtube fa-2x"></i></a>
          <a href="#" className="text-light mr-2"><i class="fab fa-linkedin fa-2x"></i></a>
          <div className="mt-5">&#169; 1991 - {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </StyledDivFooter>
    </footer>
  )
}

