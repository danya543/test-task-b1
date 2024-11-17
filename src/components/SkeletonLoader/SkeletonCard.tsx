import styles from './SkeletonLoaders.module.scss';

export const SkeletonCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}></div>
      <h3></h3>
      <p></p>
    </div>
  );
};
