import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const Navbar = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logout()).unwrap().then(() => navigate('/', { replace: true }));
  }
  return (
    <nav className="w-[100%] h-[8vh] flex items-center justify-cener py-4 px-0 md:px-4 text-purple">
      <div className="w-[100%] flex items-center justify-between">
        <div className="logo ">
          <Link to='/' className="navbar-left sono font-extrabold text-2xl " >
            InstaMaster
          </Link>
        </div>
        <div className="menu">
          {user
            ? (
              <ul className='flex items-center justify-evenly gap-3'>
                <li className=' purple'><Link to="/dashboard/create">Dashboard</Link> </li>
                <li className=' purple'><button onClick={logOutHandler}>log out</button></li>
              </ul>
            )
            : (
              <ul className='flex items-center justify-evenly gap-3'>
                <li className=' purple'><Link to="/auth/login">log in</Link> </li>
                <li className=' purple'><Link to="/auth/register">sign up</Link></li>
              </ul>
            )
          }
        </div>
      </div>
    </nav >
  )
}


export default Navbar
