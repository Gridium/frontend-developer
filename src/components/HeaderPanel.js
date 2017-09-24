import React from 'react';
import { Link } from 'react-router-dom';
import '../css/headerpanel.css';

const HeaderPanel = ({ linkPath, imgCover }) => (
  <div className='header-panel'>
    <Link to={linkPath}>
      <img src={imgCover} className='panel-img' alt=''/>
    </Link>
  </div>
);

export default HeaderPanel;
