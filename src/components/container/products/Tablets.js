import React from 'react';
import { StyledDivPhonesList as StyledDivTabletList } from '../../styles';
import { Link } from "react-router-dom";
import { ContextConsumer } from '../../context';

import TabletItem from './TabletItem';

export default function Tablets() {
  return (
    <StyledDivTabletList className="d-flex flex-column justify-content-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Tablets</li>
        </ol>
      </nav>
      <div className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.tablets.map( tablet => {
                return <TabletItem key={tablet.id} tablet = {tablet}/>
              })
            }
          }
        </ContextConsumer>
      </div>
    </StyledDivTabletList>
  )
}
