import React from 'react';
import { Tweet } from '../components/Tweet';

export default { title : 'Singular Tweet' };

export const emptyTweet = () => <Tweet />;

export const populatedTweet = () => {

  const singleTweet = {
    name: "Gertrude Cousin",
    handle: "@Cousin",
    avatar: "https://i.imgur.com/z5LNkkB.png",
    tweet: "what's this tweet about?",
    date: "a few seconds ago",
  };

  // return <Tweet name = {singleTweet.name} handle={singleTweet.handle} avatar={singleTweet.avatar} tweet={singleTweet.tweet} date={singleTweet.date} />
  return <Tweet {...singleTweet} />;
};