import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' aria-label='Safeer Ahamed B home'>
        <div className='logo flex items-center justify-center w-12 h-12 text-lg font-bold text-slate-800'>
          SAB
        </div>
      </NavLink>

      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
