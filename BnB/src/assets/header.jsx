import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black w-full ">
      <nav className="h-14 w-full flex items-center justify-between px-8">
        <div className="text-slate-50 text-lg font-poppins font-bold">
          <Link to="/">ETTARRA</Link>
        </div>

        <div className="text-slate-50 text-sm font-poppins font-medium flex items-center space-x-4">
          <Link
            to="/" // Points to Home
            className="h-8 px-2 rounded relative hover:before:w-full before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 before:bg-red-500 before:transition-all before:duration-300 flex items-center"
          >
            <p className="text-sm">HOME</p>
          </Link>
          <Link
            to="/" // Updated to link to About page
            className="h-8 px-2 rounded relative hover:before:w-full before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 before:bg-red-500 before:transition-all before:duration-300 flex items-center"
          >
            <p className="text-sm">ABOUT</p>
          </Link>
          <Link
            to="/menu"
            className="h-8 px-2 rounded relative hover:before:w-full before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 before:bg-red-500 before:transition-all before:duration-300 flex items-center"
          >
            <p className="text-sm">MENU</p>
          </Link>
          <Link
            to="/events"
            className="h-8 px-2 rounded relative hover:before:w-full before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 before:bg-red-500 before:transition-all before:duration-300 flex items-center"
          >
            <p className="text-sm">EVENTS</p>
          </Link>
          <Link
            to="/shop"
            className="h-8 px-2 rounded relative hover:before:w-full before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 before:bg-red-500 before:transition-all before:duration-300 flex items-center"
          >
            <p className="text-sm">SHOP</p>
          </Link>
          <Link
            to="/contact"
            className="h-8 px-2 rounded relative hover:before:w-full before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 before:bg-red-500 before:transition-all before:duration-300 flex items-center"
          >
            <p className="text-sm">CONTACT</p>
          </Link>
          <div className="text-black text-1xl p-4 font-poppins pr-16 font-medium">
            <Link to="/login" className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-transparent transition duration-300">
              Login
            </Link>
            <Link to="/signup" className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-transparent transition duration-300 ml-2">
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
