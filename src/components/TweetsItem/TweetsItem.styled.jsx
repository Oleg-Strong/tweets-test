import styled from '@emotion/styled';
import BgImage from '../../images/bg-Image.png';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 28px 36px 36px 36px;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const Logo = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;
export const BgImg = styled.div`
  width: 308px;
  height: 168px;
  background-image: url(${BgImage});
`;
export const AvatarWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 150px;
  top: 178px;
  z-index: 10;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
export const AvatarWrapperBg = styled.div`
  width: 62px;
  height: 62px;
  background: #5736a3;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;
export const Band = styled.div`
  position: absolute;
  left: 0px;
  top: 214px;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const TwtInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 88px;
  font-style: normal;
  color: #ebd8ff;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const FollowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
  padding: 14px 0 14px 0;
  min-width: 196px;
  font-style: normal;
  font-weight: 600;
  color: #373737;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  background-color: ${props => (props[`isfollowing`] ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
`;
