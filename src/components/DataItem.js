import React from 'react';
import '../dataitem.css';

const DataItem = ({ label, value, options }) => {
  if (options) {
    const listOptions = options.map((item, index) =>
      // If item found in value array, render span with 'item-value' className, else render as 'item-option'
      value.includes(item) ? <span className='item-value'>{item}</span> : <span className='item-option'>{item}</span>
    );

    // If DataItem component passed options as prop, render 'value-block' div with listOptions
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

  // If DataItem component passed w/o options as prop, render 'value-block' with single value
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
