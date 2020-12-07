import React from 'react';
import './Tweets.css';

export const Tweets = (props) => {
  const {name, handle, avatar, tweet, date} = props;
  return (
    <article className="tweet-container">
      <div className="tweet-list">
        <header className="tweet-list-header">
          <div className="avatar-name-wrapper">
            <img className="avatar" src={avatar} alt=""></img>
            <label name="user-name" className="user-name">{name}</label>
          </div>
          <div>
            <label className="user-handle">{handle}</label>
          </div>
        </header>
        <div className="tweet-list-body">
          <p className="tweet-line">{tweet}</p>
        </div>
        <footer className="tweet-list-footer">
          <div className="created-on">
            <p>{date}</p>
          </div>
          <div className="icons">
            <i className="fa fa-flag"></i>
            <i className="fa fa-heart"></i>
            <i className="fa fa-retweet"></i>
          </div>
        </footer>
      </div>
    </article>
  );
};

