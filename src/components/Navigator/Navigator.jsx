import { BsFilterLeft } from 'react-icons/bs';
import { HiArrowLeft } from 'react-icons/hi';
import { NavMenu, FilterWrapper, Select, BackButton } from './Navigator.styled';

export const Navigator = ({ filterValue }) => {
  return (
    <NavMenu>
      <BackButton to="/">
        <HiArrowLeft size="24" />
        Back
      </BackButton>
      <FilterWrapper>
        <Select name="tweeters" onChange={filterValue}>
          <option value="all">show all</option>
          <option value="follow">follow</option>
          <option value="followings">followings</option>
        </Select>
        <BsFilterLeft size="36" />
      </FilterWrapper>
    </NavMenu>
  );
};
