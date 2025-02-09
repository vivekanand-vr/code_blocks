import React from 'react'

const SimpleSidebar = () => {
    return (
      <div className="h-screen w-64 bg-gray-900 border-r border-gray-700 fixed left-0 top-0">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-6">Navigation</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Components
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

export default SimpleSidebar