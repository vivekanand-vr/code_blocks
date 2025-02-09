import React, { useState } from 'react';
import { Code, Copy, Check } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';

// Enhanced CodeViewer Component
const CodeViewer = ({ componentCode, position = 'right-4' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Function to highlight code using Prism
  const getHighlightedCode = () => {
    return {
      __html: Prism.highlight(
        componentCode,
        Prism.languages.jsx,
        'jsx'
      )
    };
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`absolute top-4 ${position} bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}
        title="View Code"
      >
        <Code size={20} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col shadow-xl border border-gray-700">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-emerald-400">Component Code</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  title="Copy code"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto p-4">
              <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code 
                  className="language-jsx"
                  dangerouslySetInnerHTML={getHighlightedCode()}
                />
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CodeViewer;