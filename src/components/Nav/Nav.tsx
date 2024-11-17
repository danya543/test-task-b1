import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Nav.module.scss';

export const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={styles.navigation}>
      <ul>
        {location.pathname != '/' && (
          <li onClick={() => navigate('/')}>Home</li>
        )}
        {location.pathname != '/favorities' && (
          <li onClick={() => navigate('/favorities')}>Favorities</li>
        )}
      </ul>
    </nav>
  );
};
