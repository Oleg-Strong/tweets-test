import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  width: 100%;
`;
export const FilterWrapper = styled.div`
  display: flex;
  align-content: center;
  gap: 7px;
`;
export const Select = styled.select`
  padding: 5px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.22;
  background-color: #5736a3;
  color: #ebd8ff;
  border-radius: 10px;
  outline: none;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
export const BackButton = styled(Link)`
  display: flex;
  gap: 7px;
  width: max-content;
  align-items: center;
  padding: 10px;
  font-style: normal;
  font-size: 24px;
  line-height: 1.2;
  color: #373737;
  text-decoration: none;

  transition: 250ms;
  &:hover {
    color: white;
    text-shadow: 0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),
      0 0 15px rgb(255, 255, 255), 0 0 20px rgb(255, 255, 255),
      0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255),
      0 0 55px rgb(255, 255, 255), 0 0 75px rgb(255, 255, 255);
  }
`;
