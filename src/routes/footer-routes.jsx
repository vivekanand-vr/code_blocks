// Import Components 
import Footer1 from '../components/footers/Footer1';

// Import Component as Raw Source
import footer1Source from '../components/footers/Footer1.jsx?raw';

export const footerRoutes = [
  {
    name: 'Footer 1',
    path: '/footers/footer-1',
    element: <Footer1 />,
    source: footer1Source,
    description: 'Footer version 1 inspired by BookMyShow footer component'
  }
];