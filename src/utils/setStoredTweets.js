export const setStoredTweets = tweets => {
  localStorage.setItem('tweets', JSON.stringify(tweets));
};
