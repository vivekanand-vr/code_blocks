# CODE BLOCKS - React UI Library

A modern, customizable React UI component library providing reusable UI components organized by categories. View and use the source code directly in your projects to focus more on business logic.

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

## Adding New Components

Follow these steps to add new components to the library:

### 1. Create the Component

Create your component in the appropriate category directory under `/src/components/`.

Example component structure:
```
src/components/
├── forms/
│   └── ExampleForm.jsx
├── navbars/
│   └── ExampleNavbar.jsx
└── sidebars/
    └── ExampleSidebar.jsx
```

### 2. Add Component to Routes

Import the component and its source code in the corresponding route file under `/src/routes/`. Use Vite's raw import feature to import the source code.

Example route file (`category-routes.jsx`):
```javascript
// Import Component
import ExampleComponent from '../components/category/ExampleComponent';

// Import Component Source Code
import exampleComponentSource from '../components/category/ExampleComponent.jsx?raw';

export const categoryRoutes = [
  {
    name: 'Example Component',
    path: '/category/example-component',
    element: <ExampleComponent />,
    source: exampleComponentSource,
    description: 'Brief description of the component functionality.'
  }
];
```

### 3. Update Categories

Update the category details in `/src/constants/Index.jsx` to display the component on the homepage.

```javascript
const categories = [
  {
    title: 'Category Name',
    path: '/category',
    components: [
      { name: 'Example Component' },
      // Add more components...
    ]
  }
];

export default categories;
```

## Component Guidelines

### Directory Structure
```
src/
├── components/          # UI Components organized by category
├── constants/          # Global constants and configurations
├── pages/             # Page components and layouts
├── routes/            # Route configurations for each category
└── utils/             # Utility functions and shared code
```

### Naming Conventions
- Components: Use PascalCase (e.g., `LoginForm`, `MainNavbar`)
- Files: Match component names (e.g., `LoginForm.jsx`)
- Routes: Use kebab-case (e.g., `login-form`, `main-navbar`)

### Component Standards
- Create functional components using React hooks
- Use Tailwind CSS for styling
- Ensure responsive design
- Include proper PropTypes
- Add JSDoc comments for documentation
- Implement error handling where necessary
- Keep components focused and maintainable
- Follow React best practices

### Code Style
```jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @component
 * @description Brief description of the component
 */
const ExampleComponent = ({ prop1, prop2 }) => {
  return (
    <div className="tailwind-classes">
      {/* Component Implementation */}
    </div>
  );
};

ExampleComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
};

export default ExampleComponent;
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/ComponentName`)
3. Commit your changes (`git commit -m 'Add ComponentName'`)
4. Push to the branch (`git push origin feature/ComponentName`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
