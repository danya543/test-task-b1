import { useLocation, useNavigate } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav>
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
