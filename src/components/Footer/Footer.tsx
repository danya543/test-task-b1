import { Socials } from '@components/constants';
import { Nav } from '@components/Nav/Nav';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Nav />
      <div className={styles.info}>
        <div className={styles.socials}>
          {Socials.map((el, index) => (
            <a key={index} href={el.href} target="_blank" rel="noreferrer">
              <img src={el.icon} />
            </a>
          ))}
        </div>
        <p>©Make by Daniil</p>
      </div>
    </footer>
  );
};
