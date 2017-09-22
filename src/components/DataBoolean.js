import React from 'react';
import '../databoolean.css';

const DataBoolean = ({ label, value }) => (
  <div className='data-bool'>
    <div className='bool-label'>{label}</div>
    <div className='bool-value'>{value}</div>
    <div className='bool-option'>False</div>
  </div>
);

export default DataBoolean;
