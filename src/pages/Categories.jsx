import React from 'react';
import CodeViewer from '../utils/CodeViewer';
import { useParams, useNavigate } from 'react-router-dom';
import { allRoutes } from '../routes';
import { motion } from 'framer-motion';

const Categories = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryData = allRoutes.find((c) => c.path === `/${category}`);

  if (!categoryData) return (
    <div className="min-h-screen bg-gradient-to-bl from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-white mb-6"
        >
          Category not found
        </motion.h1>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate('/')}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Return to home
        </motion.button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-bl from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate('/')}
          className="text-white group flex items-center space-x-2 hover:text-blue-400 transition-colors mb-8"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Home</span>
        </motion.button>

        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-white to-purple-500 bg-clip-text text-transparent mb-4"
          >
            {categoryData.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl"
          >
            Browse all {categoryData.name.toLowerCase()} components
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.routes.map((component, index) => (
            <motion.div
              key={component.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div onClick={() => navigate(component.path)} className="cursor-pointer">
                <h2 className="text-2xl font-semibold text-white mb-3">{component.name}</h2>
                <p className="text-gray-400 mb-4">{component.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Updated recently</span>
                  <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    Demo →
                  </span>
                </div>
              </div>
              
              {/* Add CodeViewer with different positions based on index */}
              <CodeViewer 
                componentCode={component.source || '// Component code here'} 
                position={index % 3 === 0 ? 'right-4' : index % 3 === 1 ? 'right-20' : 'right-36'}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;