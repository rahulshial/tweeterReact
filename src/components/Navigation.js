import React from 'react';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav className="nav-bar">
    <span className="page-title">TWEETER</span>
    <div className="write-tweet">
      <span className="write-tweet-title"><strong>Write</strong>&nbsp;a new tweet</span>
      <button type="compose" className="compose-button"><i className="fas fa-angle-double-down" aria-hidden="true"></i></button>
    </div>
  </nav>

  );
};

