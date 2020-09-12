import React from 'react';

import CapabilityItem from "./CapabilityItem";

const CapabilitiesList = props => {
  const {items} = props;

  let counter = 0;
  const capabilitiesList = items.map(item => {
    counter++;
    return(
      <CapabilityItem key={item.id} name={item.name} desc={item.desc} diff={counter % 2 === 0}/>
      );
  });
  return (
    <>
      <div className="col-md-6 register-capabilities__wrapper">
        <h3 className="register-capabilities__title-sub">Dlaczego warto założyć konto w tej aplikacji?</h3>
        <ul className='col-12 register-capabilities__list'>
          {capabilitiesList}
        </ul>
      </div>
    </>
  );
}

export default CapabilitiesList;