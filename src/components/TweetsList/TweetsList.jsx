import { TweetsItem } from 'components/TweetsItem/TweetsItem';
import { ListWrapper, Title } from './TweetsList.styled';
import { useState, useEffect } from 'react';
import { getTweets } from 'services/api';

const statusFilters = Object.freeze({
  following: false,
});

export const TweetsList = ({ filterValue, loadParams }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getTweets(loadParams);
        const storedTweets = JSON.parse(localStorage.getItem('tweets')) || [];
        const updatedTweets = response.data.map(tweet => {
          const storedTweet = storedTweets.find(t => t.id === tweet.id);
          return {
            ...tweet,
            filterStatus: storedTweet
              ? storedTweet.filterStatus
              : statusFilters,
          };
        });
        localStorage.setItem('tweets', JSON.stringify(updatedTweets));
        setTweets(JSON.parse(localStorage.getItem('tweets')));
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [loadParams]);

  const toggleFollowing = id => {
    const updatedTweets = tweets.map(tweet => {
      if (tweet.id === id) {
        const updatedFilterStatus = {
          ...tweet.filterStatus,
          following: tweet.filterStatus.following ? false : true,
        };
        return { ...tweet, filterStatus: updatedFilterStatus };
      }

      return tweet;
    });
    localStorage.setItem('tweets', JSON.stringify(updatedTweets));
    setTweets(JSON.parse(localStorage.getItem('tweets')));
    return;
  };

  const getFilteredTweeters = filter => {
    switch (filter) {
      case 'follow':
        return tweets.filter(tweet => tweet.filterStatus.following !== true);
      case 'followings':
        return tweets.filter(tweet => tweet.filterStatus.following === true);
      default:
        return tweets;
    }
  };
  const filteredTweeters = getFilteredTweeters(filterValue);

  return (
    <>
      <Title>Follow the tweeters</Title>
      <ListWrapper>
        {filteredTweeters.map(
          ({ id, avatar, tweets, followers, filterStatus }) => {
            return (
              <TweetsItem
                key={id}
                id={id}
                avatar={avatar}
                tweets={tweets}
                followers={followers}
                filterStatus={filterStatus}
                isFollow={toggleFollowing}
              />
            );
          }
        )}
      </ListWrapper>
    </>
  );
};
