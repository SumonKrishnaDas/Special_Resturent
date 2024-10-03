import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
const Main = () => {
     const location=useLocation();
     console.log("where i am",location);
    const noheaderfooter=  location.pathname.includes('login')||location.pathname.includes('Signup');

    return (
        
        <div>
{ noheaderfooter  ||  <Navbar>  </Navbar>}
<Outlet> </Outlet>
          { noheaderfooter || <Footer> </Footer>
 }
 </div>
    );
};

export default Main;