import { useClickOutside } from '@hooks/useClickOutside';
import { fetchCharacters } from '@store/reducers/charactersSlice';
import { AppDispatch, RootState } from '@store/store';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './utils.module.scss';

export const Select = () => {
  const dispatch = useDispatch<AppDispatch>();
  const info = useSelector((state: RootState) => state.characters.info);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<number>(info?.count || 10);

  const ref = useRef(null);
  useClickOutside(ref, () => setIsOpen(false));

  const handleSelectChange = (value: number) => {
    setSelectedValue(value);
    dispatch(fetchCharacters({ limit: value }));
    setIsOpen(false);
  };

  return (
    <div className={styles.selectContainer} ref={ref}>
      <div
        className={`${styles.selectHeader} ${isOpen ? styles.focus : ''}`}
        onClick={() => setIsOpen(!isOpen)}>
        {selectedValue}
        <span className={styles.arrow}>{isOpen ? '˄' : '˅'}</span>
      </div>
      {isOpen && (
        <ul className={styles.selectList}>
          {[10, 15].map(value => (
            <li
              key={value}
              className={`${styles.selectItem} ${selectedValue === value ? styles.selected : ''}`}
              onClick={() => handleSelectChange(value)}>
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
