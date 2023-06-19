import styled from '@emotion/styled';

export const LoadBtn = styled.button`
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  text-align: center;
  font-style: normal;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 259ms;

  &:hover {
    box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.8);
    color: white;
    text-shadow: 0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255),
      0 0 15px rgb(255, 255, 255), 0 0 20px rgb(255, 255, 255),
      0 0 30px rgb(255, 255, 255), 0 0 40px rgb(255, 255, 255),
      0 0 55px rgb(255, 255, 255), 0 0 75px rgb(255, 255, 255);
  }
`;
