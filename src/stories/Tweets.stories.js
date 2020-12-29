import React from 'react';
import { Tweets } from '../components/Tweets';

export default { title : 'Tweet Container' };

export const emptyTweet = () => <Tweets />;

export const populatedTweet = () => {

  const tweets = [
    {
      name: "Gertrude Cousin",
      handle: "@Cousin",
      avatar: "https://i.imgur.com/z5LNkkB.png",
      tweet: "what's this tweet about?",
      date: "a few seconds ago",
    },
    {
      name: "Who is this?",
      handle: "@Someone",
      avatar: "https://i.imgur.com/z5LNkkB.png",
      tweet: "Something has been tweeted?",
      date: "a few minutes ago",
    }
  ];

  // return <Tweet name = {singleTweet.name} handle={singleTweet.handle} avatar={singleTweet.avatar} tweet={singleTweet.tweet} date={singleTweet.date} />
  return <Tweets tweetData={tweets}/>;
};