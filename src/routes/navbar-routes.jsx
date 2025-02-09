// Import Components 
import SimpleNavbar from '../components/navbars/SimpleNavbar';

// Import Respective Source Codes
import { simpleNavbarSource } from '../component-sources/navbars/SimpleNavbar';


export const navbarRoutes = [
  {
    name: 'Simple Navbar',
    path: '/navbars/simple-navbar',
    element: <SimpleNavbar />,
    source: simpleNavbarSource,
    description: 'Simple Navbar with basic links.'
  }
];