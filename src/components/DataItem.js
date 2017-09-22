import React from 'react';
import '../dataitem.css';

const DataItem = ({ label, value, options }) => {
  // if passed options,
  if (options) {
    const listOptions = options.map((item, index) =>
      value.includes(item) ? <span className='item-value'>{item}</span> : <span className='item-option'>{item}</span>
    );

    return(
    <div className='data-item'>
      <div className='label-block'>
        <div className='item-label'>{label}</div>
      </div>
      <div className='value-block'>
        {listOptions}
      </div>
    </div>
   )
  }

  return(
  <div className='data-item'>
    <div className='label-block'>
      <div className='item-label'>{label}</div>
    </div>
    <div className='value-block'>
      <div className='item-value'>{value}</div>
    </div>
  </div>
 )
};

export default DataItem;
