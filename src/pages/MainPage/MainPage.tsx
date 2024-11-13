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
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  return (
    <main>
      <Characters />
      <button onClick={() => dispatch(fetchCharacters())}>
        Load Characters
      </button>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <p>succeeded</p>}
      {status === 'failed' && <p>Failed to load characters.</p>}
    </main>
  );
};

/**characters.map(el => <p key={el._id}>{el._id}</p>) */
