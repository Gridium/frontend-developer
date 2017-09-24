import React from 'react';
import '../css/footer.css';

const Footer = ({ background }) => {
  const style = {
    backgroundImage: 'url(' + background + ')'
  }
  return (
    <footer>
      <div className='block-front' style={style}></div>
      <div className='block-back'></div>
    </footer>
  )
};

export default Footer;
