export const getStoredTweets = () => {
  return JSON.parse(localStorage.getItem('tweets')) || [];
};
