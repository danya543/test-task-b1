import { useClickOutside } from '@hooks/useClickOutside';
import { Button } from '@utils/Button';
import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './ModalPortal.module.scss';

export const ModalPortal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) => {
  const ref = useRef(null);

  useClickOutside(ref, onClose);

  return createPortal(
    <div className={styles.modal_overlay}>
      <div className={styles.container} ref={ref}>
        <Button classname={styles.modal_close} text={`×`} onClick={onClose} />
        {children}
      </div>
    </div>,
    document.body,
  );
};
