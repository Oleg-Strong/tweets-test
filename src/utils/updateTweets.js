import { getStoredTweets } from './getStoredTweets';
import { setStoredTweets } from './setStoredTweets';

export const updateTweets = tweets => {
  const storedTweets = getStoredTweets();
  const updatedTweets = tweets.data.map(tweet => {
    const storedTweet = storedTweets.find(t => t.id === tweet.id);
    return {
      ...tweet,
      following: storedTweet ? storedTweet.following : false,
    };
  });
  setStoredTweets(updatedTweets);
};
