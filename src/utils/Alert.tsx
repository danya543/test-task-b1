import { AlertProps } from '@src/types/utils';
import { useEffect, useState } from 'react';

import styles from './utils.module.scss';

export const Alert = ({ type, message }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.alert}`}>
      <div className={styles.alert_message}>
        <p>{message}</p>
      </div>
      <div className={styles.progress_bar}>
        <div className={`${styles.progress_bar_fill} ${styles[type]}`} />
      </div>
    </div>
  );
};
