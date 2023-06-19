import { LoadBtn } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <LoadBtn type="button" onClick={onLoadMore}>
      Load More...
    </LoadBtn>
  );
};
