// Import Components 
import SimpleLoginForm from '../components/forms/SimpleLoginForm';

// Import Component as Raw source
import simpleLoginFormSource from '../components/forms/SimpleLoginForm.jsx?raw';

export const formsRoutes = [
  {
    name: 'Login Form',
    path: '/forms/login-form',
    element: <SimpleLoginForm />,
    source: simpleLoginFormSource,
    description: 'Simple login form with email and password inputs.'
  }
];