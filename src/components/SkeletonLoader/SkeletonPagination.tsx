import styles from './SkeletonLoaders.module.scss';

export const SkeletonPagination = () => {
  return (
    <div className={styles.pagination_container}>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </div>
  );
};
