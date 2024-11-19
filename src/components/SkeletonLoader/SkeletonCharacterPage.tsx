import styles from './SkeletonLoaders.module.scss';

export const SkeletonCharacterPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.character_header}>
        <div className={styles.character_img} />
        <div className={styles.character_info}>
          <h1></h1>
          <div className={styles.character_films}>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
      <div className={styles.character_blockInfo}>
        <div />
        <div />
      </div>
    </div>
  );
};
