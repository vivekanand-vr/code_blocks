// Import Components 
import SimpleLoginForm from '../components/forms/SimpleLoginForm';

// Import Respective Source Codes
import { simpleLoginFormSource } from '../component-sources/forms/SimpleLoginForm';

export const formsRoutes = [
  {
    name: 'Login Form',
    path: '/forms/login-form',
    element: <SimpleLoginForm />,
    source: simpleLoginFormSource,
    description: 'Simple login form with email and password inputs.'
  }
];