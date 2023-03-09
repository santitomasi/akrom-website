import './navbar.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState('');

  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  return (
    <nav>
      <div className="logo">
        <a href="/home">
          <img src="../assets/images/logoakrom.png" alt="Logo" />
        </a>
      </div>

      <div className="links">
        <ul className="nav">
          <li className="nav">
            <Link
              to={'/home'}
              className={'nav ' + (activeRoute === '/home' ? 'active' : '')}
            >
              Home
            </Link>
          </li>
          <li className="nav">
            <Link
              to={'/consulting'}
              className={
                'nav ' + (activeRoute === '/consulting' ? 'active' : '')
              }
            >
              Consulting
            </Link>
          </li>
          <li className="nav">
            <Link
              to={'/solutions'}
              className={
                'nav ' + (activeRoute === '/solutions' ? 'active' : '')
              }
            >
              Solutions
            </Link>
          </li>
          <li className="nav">
            <Link
              to={'/technology'}
              className={
                'nav ' + (activeRoute === '/technology' ? 'active' : '')
              }
            >
              Technology
            </Link>
          </li>
          <li className="nav">
            <Link
              to={'/about'}
              className={'nav ' + (activeRoute === '/about' ? 'active' : '')}
            >
              About Us
            </Link>
          </li>
          <li className="nav">
            <Link
              to={'/career'}
              className={'nav ' + (activeRoute === '/career' ? 'active' : '')}
            >
              Career
            </Link>
          </li>
          <li className="nav">
            <Link
              to={'/contact'}
              className={'nav ' + (activeRoute === '/contact' ? 'active' : '')}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
