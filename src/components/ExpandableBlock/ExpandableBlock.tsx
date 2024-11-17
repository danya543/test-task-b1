import { useState } from 'react';

import styles from './ExpandableBlock.module.scss';

export const ExpandableBlock = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    items.length > 0 && (
      <div className={styles.section}>
        <h4>{title}</h4>
        {items.length > 3 ? (
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${styles.content} ${isExpanded ? styles.expanded : ''}`}>
            {items.join(', ')}
          </div>
        ) : (
          <div>{items.join(', ')}</div>
        )}
      </div>
    )
  );
};
