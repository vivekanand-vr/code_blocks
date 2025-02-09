# CODE BLOCKS - React UI Library

A modern, customizable React UI component library. This library provides reusable UI components organized by categories with the source code that you can use them directly in your projects and focus more on the logic.

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/code-blocks.git

# Navigate to project directory
cd code-blocks

# Install dependencies
npm install

# Start development server
npm run dev
```
<br />

# Adding New Components

Here's a step-by-step guide to adding new components to the library:

## 1. Create the Component

Create the component in the appropriate category directory within the `/components` folder.

### Directory Structure Example:
```
src/components/
├── forms/
│   └── SimpleLoginForm.jsx
...
```

### Example Component (`SimpleLoginForm.jsx`):
```jsx
import React from 'react';

const SimpleLoginForm = () => {
  return (
    <div>
      ..Implementation 
    </div>
  );
};

export default SimpleLoginForm;
```

---

## 2. Create the Source Code

In the `/component-sources` directory, create a file that exports the component's source code as a string.

### Directory Structure Example:
```
src/component-sources/
├── forms/
│   └── SimpleLoginForm.js
```

### Example Source File (`SimpleLoginForm.js`):
```javascript
export const simpleLoginFormSource = `import React from 'react';

const SimpleLoginForm = () => {
  return (
    <div>
      ..Implementation
    </div>
  );
};

export default SimpleLoginForm;`;
```

---

## 3. Add Component to Routes

Import the component and its source code in the appropriate route configuration file within the `/routes` directory.

### Directory Structure Example:
```
src/routes/
├── form-routes.jsx
├── index.jsx
├── navbar-routes.jsx
└── sidebar-routes.jsx
```

### Example Route Configuration (`form-routes.jsx`):
```javascript
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
```

---

## 4. Update Categories

Update the category details in the `/constants/index.jsx` file to display the component on the homepage.

### Directory Structure Example:
```
src/constants/
└── index.jsx
```

### Example Category Update:
```javascript
const categories = [
  {
    title: 'Forms',
    path: '/forms',
    components: [
      { name: 'Login Form' },
    ]
  },
];

export default categories;
```

## 📝 Component Guidelines

### Naming Conventions
- Use PascalCase for component names (e.g., `LoginForm`, `BasicModal`)
- Use kebab-case for routes (e.g., `login-form`, `basic-modal`)
- Use descriptive names that indicate component functionality

### Component Structure
- Each component should be in its own directory
- Include any component-specific styles or utilities in the component directory
- Export component as default from its main file
- Include tests in the component directory

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Follow the dark emerald theme color scheme
- Ensure components are responsive
- Use CSS modules for component-specific styles if needed

### Code Standards
- Use functional components with hooks
- Include PropTypes or TypeScript types
- Add JSDoc comments for component documentation
- Follow React best practices
- Include error handling where appropriate

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
