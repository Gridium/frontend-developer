import React from 'react';
import '../css/footer.css';

const Footer = ({ background, footerClass }) => {
  const style = {
    backgroundImage: 'url(' + background + ')'
  }
  return (
    <footer className={footerClass}>
      <div className='block-front' style={style}></div>
      <div className='block-back'></div>
    </footer>
  )
};

export default Footer;
