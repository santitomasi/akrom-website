import { Nav } from './navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>

      <div className="logo">
          <a href="/home"><img src={'../../public/logo192.png'} alt="Logo"/></a>
      </div>

      <div className='links'> 
        <ul className='nav'>
          <li className='nav'>
            <Link to={"/home"} className='nav'>
              Home
            </Link>
          </li>
          <li className='nav'>
            <Link to={"/consulting"} className='nav'>
              Consulting
            </Link>
          </li>
          <li className='nav'>
              <Link to={"/solutions"} className='nav'>
                Solutions
              </Link>
          </li>
          <li className="nav">
            <Link to={"/technology"} className='nav'>
              Technology
            </Link>
          </li>
          <li className="nav">
            <Link to={"/about"} className='nav'>
              About Us
            </Link>
          </li>
          <li className="nav">
            <Link to={"/career"} className='nav'>
              Career
            </Link>
          </li>
          <li className="nav">
            <Link to={"/getintouch"} className='nav'>
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
  
    </nav>
  )
  }

export default Navbar;

  