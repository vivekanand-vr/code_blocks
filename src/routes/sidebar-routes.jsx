// Import Components
import SimpleSidebar from '../components/sidebars/SimpleSidebar';

// Import Respective Source Codes
import { simpleSidebarSource } from '../component-sources/sidebars/SimpleSidebar'; 

export const sidebarRoutes = [
  {
    name: 'Simple Sidebar',
    path: '/sidebars/simple-sidebar',
    element: <SimpleSidebar />,
    source: simpleSidebarSource,
    description: 'Simple Sidebar with basic links.'
  }
];