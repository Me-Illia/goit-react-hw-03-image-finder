import { PictureItem } from 'components/Pictures/Pictures';
import { Ul } from './PictureItem.styled';

export const Pictures = ({ items, onClick }) => {
  return (
    <>
      <Ul>
        <PictureItem items={items} onClick={onClick} />
      </Ul>
    </>
  );
};
