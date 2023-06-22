export const getFilteredTweets = (filterValue, tweets) => {
  switch (filterValue) {
    case 'follow':
      return tweets.filter(tweet => tweet.following !== true);
    case 'followings':
      return tweets.filter(tweet => tweet.following === true);
    default:
      return tweets;
  }
};
