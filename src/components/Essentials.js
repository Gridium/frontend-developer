import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/essentials-cover.jpg';

const Essentials = () => (
  <div>
    <PageHeader title={'Essentials'} />
    <Footer background={Background} />
  </div>
);

export default Essentials;
