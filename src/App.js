import React, {useState} from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { TweetForm } from './components/TweetForm';
import { Tweet } from './components/Tweet';
import { Tweets } from './components/Tweets';


const initialTweetData = [
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

function App() {

  const [tweetData, setTweetData] = useState(initialTweetData);



  const addNewTweet = (tweet) => {
    const newTweet =   {
      name: "Who is this?",
      handle: "@Someone",
      avatar: "https://i.imgur.com/z5LNkkB.png",
      tweet,
      date: "a few minutes ago",
    };
    setTweetData([newTweet, ...tweetData])
  }
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main class="container">
        <TweetForm addNewTweet={addNewTweet}/>
        <Tweets tweetData={tweetData} />
      </main>
    </div>
  );
}

export default App;
