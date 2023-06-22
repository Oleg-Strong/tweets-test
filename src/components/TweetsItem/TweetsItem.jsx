import LogoImg from '../../images/logo.png';
import DefaultAvatar from '../../images/default-avatar.png';

import {
  Wrapper,
  Logo,
  BgImg,
  AvatarWrapper,
  AvatarWrapperBg,
  Avatar,
  Band,
  TwtInfo,
  FollowBtn,
} from './TweetsItem.styled';

export const TweetsItem = ({
  tweet,

  isFollow,
}) => {
  const { id, avatar, tweets, followers, following } = tweet;
  const quantityFollowers = (following ? 1 : 0) + followers;
  return (
    <Wrapper>
      <Logo>
        <img src={LogoImg} width="76px" height="22px" alt="logo" />
      </Logo>
      <BgImg />
      <AvatarWrapper>
        <AvatarWrapperBg>
          <Avatar
            src={avatar ? avatar : DefaultAvatar}
            width="62px"
            height="62px"
          />
        </AvatarWrapperBg>
      </AvatarWrapper>
      <Band />
      <TwtInfo>
        <p>{tweets.toLocaleString('en-EN')} Tweets</p>
        <p>{quantityFollowers.toLocaleString('en-EN')} Followers</p>
      </TwtInfo>
      <FollowBtn
        type="buttom"
        onClick={() => isFollow(id)}
        isfollowing={following}
      >
        {following ? 'Following' : 'Follow'}
      </FollowBtn>
    </Wrapper>
  );
};
