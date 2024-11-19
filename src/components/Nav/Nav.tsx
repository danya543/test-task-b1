import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Nav.module.scss';

export const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <nav className={styles.navigation}>
      <ul>
        {location.pathname != '/' && (
          <li onClick={() => handleNavigate('/')}>Home</li>
        )}
        {location.pathname != '/favorities' && (
          <li onClick={() => handleNavigate('/favorities')}>Favorities</li>
        )}
      </ul>
    </nav>
  );
};
