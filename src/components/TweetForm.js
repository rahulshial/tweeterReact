import React, { useState } from 'react';
import './TweetForm.css';

export const TweetForm = (props) => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState('');
  const tweetRemainingLength = 140 - tweetText.length
  const spanStyle = {color: tweetRemainingLength >= 0? "black" : "red"};

  const submitTweet = event => {
    event.preventDefault();
    if(tweetRemainingLength >=0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText('');
    }
  }

  return (
  <section className="new-tweet">
      <div className="error-line">
        <p className="error-message"><i className="fas fa-exclamation-triangle"></i></p>
      </div>
      <form onSubmit={submitTweet} className="tweet-form">
        <label for="tweet-text">What are you humming about?</label>
        <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} name="text" id="tweet-text"></textarea>
        <div className="box-button-char-count">
          <div>
            <button className="tweet-button" type="submit">Tweet</button>
          </div>
          <div>
            <output style={spanStyle} name="counter" className="counter" for="tweet-text">{140 - tweetText.length}</output>
          </div>
        </div>
      </form>
    </section>
  );
};

