import React from 'react';
import { job } from '../jobData';
import '../pageheader.css'

const PageHeader = ({ title }) => (
  <div className='heading-block'>
    <h1>{job.headline}</h1>
    <span></span>
    <h2>{title}</h2>
  </div>
);

export default PageHeader;
