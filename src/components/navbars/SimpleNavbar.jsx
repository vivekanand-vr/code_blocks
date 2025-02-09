import React from 'react'

const NavLink = ({ title, link }) =>{
  return(
    <div className='text-slate-300 font-semibold hover:text-white'>
      {/** Use 'Link' from react-router-dom for in application navigation & not exernal website */}
      <a href={link} target='blank'> {title} </a>
    </div>
  )
}

const SimpleNavbar = () => {
    return (
        <nav className="bg-gray-900 border-b border-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">CODE BLOCKS</span>
              </div>
              <div className="flex space-x-4">
                {/* Navigation placeholder - as requested, you'll add links here */}
                <NavLink link={"https://www.google.co.in/"} title={"Google"} />
                <NavLink link={"https://www.instagram.com/"} title={"Instagram"} />
              </div>
            </div>
          </div>
        </nav>
    );
  };

export default SimpleNavbar