import { useState, useEffect } from 'react';
import { ListWrapper, Title } from './TweetsList.styled';
import { getTweets } from 'services/api';
import { getFilteredTweets } from 'utils/getFilteredTweets';
import { TweetsItem } from 'components/TweetsItem/TweetsItem';
import { getStoredTweets } from 'utils/getStoredTweets';
import { updateTweets } from 'utils/updateTweets';
import { setStoredTweets } from 'utils/setStoredTweets';

export const TweetsList = ({ filterValue, loadParams }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getTweets();
        updateTweets(response);
        setTweets(getStoredTweets());
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const toggleFollowing = id => {
    const updatedTweets = tweets.map(tweet => {
      if (tweet.id === id) {
        return { ...tweet, following: !tweet.following };
      }
      return tweet;
    });
    setStoredTweets(updatedTweets);
    setTweets(getStoredTweets());
    return;
  };
  const filteredTweets = getFilteredTweets(filterValue, tweets).slice(
    0,
    loadParams
  );
  return (
    <>
      <Title>Follow the tweeters</Title>
      <ListWrapper>
        {filteredTweets.map(tweet => {
          return (
            <TweetsItem
              key={tweet.id}
              tweet={tweet}
              isFollow={toggleFollowing}
            />
          );
        })}
      </ListWrapper>
    </>
  );
};
