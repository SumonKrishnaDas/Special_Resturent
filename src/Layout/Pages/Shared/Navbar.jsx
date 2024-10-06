import React, { useContext } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
// Importing custom hook
import UseMenu from '../../../hooks/UseMenu';
import useCart from '../../../hOOKS/useCart';
const Navbar = ({ title }) => {
  const { user, signOut } = useContext(AuthContext);
  const [menu] = UseMenu();
  const [cart,refetch]= useCart();
// Filter the menu items to find 'salad' items
  const salad = menu.find(item => item.category === 'salad'); 
  console.log("salad ace ni re vai",salad)
  // find returns the first match, which is typically what you'd us
  const handleLogout = () => {
    signOut()
      .then(() => { /* Handle successful sign out */ })
      .catch(error => console.log(error));
  };

  // Navigation options to be rendered
  const navoptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/secure">Secret</Link></li>
      
      {/* Check if 'salad' exists and render the link dynamically */}
      
      <li><Link to='order/salad'>Order</Link></li>

      <li><Link to='/dashboard/mycart'>
      
      
   <button className='btn gap-2' >

   <MdOutlineShoppingCart />
   <div className="badage badage-secondary">+{cart?.length||0}</div>
    
   </button>
      
      </Link></li>

      {/* Conditional rendering for the user */}
      {
        user ? (
          <>
            <span>{user?.displayName}</span> {/* Make sure 'displayName' is the correct field */}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )
      }
    </>
  );

  return (
    <div>
      <div className="navbar bg-opacity-30 text-white max-w-screen-xl bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-opacity-30 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navoptions} {/* Correctly render navoptions */}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">{title || 'Special Restaurant'}</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navoptions} {/* Correctly render navoptions */}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
