import React from 'react';
import '../dataitem.css';

const DataItem = ({ label, value }) => (
  <div className='data-item'>
    <div className='label-block'>
      <div className='label'>{label}</div>
    </div>
    <div className='value-block'>
      <div className='value'>{value}</div>
    </div>
  </div>
);

export default DataItem;
