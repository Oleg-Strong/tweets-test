import styled from '@emotion/styled';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 1.2;
  color: #373737;
  text-shadow: 0 0 5px rgb(174, 123, 227), 0 0 10px rgb(174, 123, 227),
    0 0 15px rgb(174, 123, 227), 0 0 20px rgb(174, 123, 227),
    0 0 30px rgb(174, 123, 227), 0 0 40px rgb(174, 123, 227),
    0 0 55px rgb(174, 123, 227), 0 0 75px rgb(174, 123, 227);
`;
export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Img = styled.img`
  width: 200px;
  height: 200px;
`;
export const AboutText = styled.p`
  font-size: 30px;
  line-height: 1.2;
  color: #373737;
`;
