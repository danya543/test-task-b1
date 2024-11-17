import { clearFavorites } from '@store/reducers/favoriteSlice';
import { AppDispatch } from '@store/store';
import { Button } from '@utils/Button';
import { useDispatch } from 'react-redux';

import styles from './Modals.module.scss';

export const Confirm = ({
  confirmText,
  onClose,
  triggerAlert,
}: {
  confirmText: string;
  onClose: () => void;
  triggerAlert: () => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAgree = () => {
    dispatch(clearFavorites());
    triggerAlert();
    onClose();
  };

  const handleReject = () => {
    onClose();
  };

  return (
    <div>
      <h2>{confirmText}</h2>
      <div className={styles.buttons}>
        <Button classname={styles.agree} onClick={handleAgree} text={'yes'} />
        <Button classname={styles.reject} onClick={handleReject} text={'no'} />
      </div>
    </div>
  );
};
