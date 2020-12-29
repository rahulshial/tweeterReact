import React from 'react';
import { Tweet } from './Tweet';

export const Tweets = (props) => {
  const {tweetData} = props;

  const tweets = tweetData ? tweetData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} avatar={tweetData.avatar} tweet={tweetData.tweet} date={tweetData.date}/>  }) : "There is no tweet";


  return (
    <section class="tweets">
    {tweets}
  </section>
  )
}