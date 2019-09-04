import React from 'react';
import {StyledFooter, StyledListsWrapper} from './Styles';

export default function Footer() {
  return (
    <StyledFooter className="d-flex bg-light mt-3 w-100">
      <StyledListsWrapper className="d-flex m-auto">
        <ul>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
        </ul>
        <ul>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
        </ul>
        <ul>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
        </ul>
      </StyledListsWrapper>
    </StyledFooter>
  )
}

