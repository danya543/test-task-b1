import { Button } from '@utils/Button';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './ModalPortal.module.scss';

export const ModalPortal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) => {
  return createPortal(
    <div className={styles.modal_overlay}>
      <div className={styles.container}>
        <Button classname={styles.modal_close} text={`×`} onClick={onClose} />
        {children}
      </div>
    </div>,
    document.body,
  );
};
