import React from 'react';

const CapabilityItem = props => {
  const {name, desc, diff} = props;
  return (
    <li className='col-6 register-capabilities__item'>
      <h4 className="item-title">{name}</h4>
      <p className='item-desc'>{desc}</p>
      <span className={diff ? 'line line-diff' : 'line'}></span>
    </li>
  );
}

export default CapabilityItem;