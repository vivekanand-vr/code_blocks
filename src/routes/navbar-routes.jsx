// Import Components 
import SimpleNavbar from '../components/navbars/SimpleNavbar';

// Import Cmponent as Raw Source 
import simpleNavbarSource from '../components/navbars/SimpleNavbar.jsx?raw';


export const navbarRoutes = [
  {
    name: 'Simple Navbar',
    path: '/navbars/simple-navbar',
    element: <SimpleNavbar />,
    source: simpleNavbarSource,
    description: 'Simple Navbar with basic links.'
  }
];