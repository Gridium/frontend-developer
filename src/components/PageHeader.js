import React from 'react';
import { job } from '../jobData';
import '../css/pageheader.css'

const PageHeader = ({ title }) => (
  <div className='heading-block'>
    <h1>{job.headline}</h1>
    <span className='line'></span>
    <h2>{title}</h2>
  </div>
);

export default PageHeader;
