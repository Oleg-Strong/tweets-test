import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { Navigator } from 'components/Navigator/Navigator';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useState } from 'react';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const Tweets = () => {
  const [filter, setFilter] = useState('all');
  const [params, setParams] = useState(3);

  const handleLoadMore = () => {
    setParams(prevState => (prevState < 12 ? prevState + 3 : prevState));
  };
  const handleChange = e => {
    setFilter(e.target.value);
  };
  return (
    <Section>
      <Container>
        <Navigator filterValue={handleChange} />
        <TweetsList filterValue={filter} loadParams={params} />
        {params < 12 ? <LoadMoreBtn onLoadMore={handleLoadMore} /> : null}
      </Container>
    </Section>
  );
};

export default Tweets;
