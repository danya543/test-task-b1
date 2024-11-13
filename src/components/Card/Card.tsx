import { Character } from '@src/types/Character';

export const Card = ({ name, imageUrl }: Character) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <h3>{name}</h3>
    </div>
  );
};
