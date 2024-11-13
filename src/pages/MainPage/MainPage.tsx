import { Characters } from '@components/Characters/Characters';
import { fetchCharacters } from '@store/reducers/charactersSlice';
import { AppDispatch, RootState } from '@store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.characters.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters({ page: 1, limit: 10 }));
    }
  }, [dispatch, status]);

  return (
    <main>
      <Characters />
    </main>
  );
};
