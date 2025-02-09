import React, { useState } from 'react';
import { categories } from '../constants/Index';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-bl from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-white to-purple-500 bg-clip-text text-transparent mb-2">
              CODE BLOCKS
            </h1>
            <p className="text-gray-400 mb-8 text-xl">
              A Modern React UI Component Library
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search components..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(category.path)}
              className="group bg-gray-900 rounded-lg p-6 border border-gray-700 cursor-pointer hover:border-blue-500 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">{category.title}</h2>
              <p className="text-gray-400 mb-4">{category.components.length} components</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{category.updated}</span>
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  Explore →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;