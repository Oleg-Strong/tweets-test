import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100vw;
  z-index: 20;

  background-color: #ae7be3;
  box-shadow: 0px 10px 18px 0px #471ca9;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LinkBtn = styled(NavLink)`
  display: block;
  padding: 5px;

  text-align: center;
  font-style: normal;
  font-size: 24px;
  line-height: 1.2;
  color: #373737;
  text-decoration: none;
  border: 2px solid #ffffff;
  border-radius: 5px;
  transition: all 259ms;

  &.active {
    color: white;
    text-shadow: 0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),
      0 0 15px rgb(255, 255, 255), 0 0 20px rgb(255, 255, 255),
      0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255),
      0 0 55px rgb(255, 255, 255), 0 0 75px rgb(255, 255, 255);
  }

  &:hover {
    box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.8);
    color: white;
    text-shadow: 0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),
      0 0 15px rgb(255, 255, 255), 0 0 20px rgb(255, 255, 255),
      0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255),
      0 0 55px rgb(255, 255, 255), 0 0 75px rgb(255, 255, 255);
  }
`;
