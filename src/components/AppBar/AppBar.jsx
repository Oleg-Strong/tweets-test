import { Container } from 'components/Container/Container';
import SiteLogo from '../../images/site-logo.png';
import {
  Header,
  Wrapper,
  LogoLink,
  LogoImg,
  LinkBtn,
  Navigation,
} from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Wrapper>
          <LogoLink to="/">
            <LogoImg src={SiteLogo} width="76px" height="22px" alt="logo" />
          </LogoLink>
          <Navigation>
            <LinkBtn to="/" end>
              Home
            </LinkBtn>
            <LinkBtn to="/tweets">Tweets</LinkBtn>
          </Navigation>
        </Wrapper>
      </Container>
    </Header>
  );
};
