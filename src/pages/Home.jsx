import { Container } from 'components/Container/Container';
import { Hero } from 'components/Hero/Hero';
import { Section } from 'components/Section/Section';

const Home = () => {
  return (
    <Section>
      <Container>
        <Hero />
      </Container>
    </Section>
  );
};

export default Home;
