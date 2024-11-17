import { Images } from '@components/constants';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { Mail, Git, Linkedin, Telegram } = Images;
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="mailto:dgilev75@gmail.com" target="_blank" rel="noreferrer">
          <img src={Mail} />
        </a>
        <a href="https://github.com/danya543" target="_blank" rel="noreferrer">
          <img src={Git} />
        </a>
        <a
          href="https://www.linkedin.com/in/daniil-hiliou-91479a284/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} />
        </a>
        <a href="https://t.me/danuchka" target="_blank" rel="noreferrer">
          <img src={Telegram} />
        </a>
      </div>
      <p>©Make by Daniil</p>
    </footer>
  );
};
