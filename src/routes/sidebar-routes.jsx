// Import Components
import SimpleSidebar from '../components/sidebars/SimpleSidebar';

// Import Component as Raw Source
import simpleSidebarSource from '../components/sidebars/SimpleSidebar.jsx?raw'; 

export const sidebarRoutes = [
  {
    name: 'Simple Sidebar',
    path: '/sidebars/simple-sidebar',
    element: <SimpleSidebar />,
    source: simpleSidebarSource,
    description: 'Simple Sidebar with basic links.'
  }
];