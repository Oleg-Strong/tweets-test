// import { Section } from 'components/Section/Section';
import SiteLogo from '../../images/site-logo.png';
import {
  HeroWrapper,
  Title,
  AboutWrapper,
  Img,
  AboutText,
} from './Hero.styled';

export const Hero = () => {
  return (
    // <Section>
    <HeroWrapper>
      <Title>Tweets</Title>
      <AboutWrapper>
        <Img src={SiteLogo} width="200px" height="200px" alt="logo" />
        <AboutText>
          A social network, where you can find and follow your favorite tweets.
        </AboutText>
      </AboutWrapper>
    </HeroWrapper>
    // </Section>
  );
};
