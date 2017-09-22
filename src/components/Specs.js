import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/specs-cover.jpg';

const Specs = () => {
  return (
    <div>
      <PageHeader title={'Specs'} />
      <Footer background={Background} />
    </div>
  )
};

export default Specs;
