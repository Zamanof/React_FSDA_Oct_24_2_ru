import React from 'react'
import {Link} from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <div className="text-center py-20">
            <div className="text-9xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                404
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                Page Not Found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
                Oops! This dimension doesn't exist. The page you're looking for has been lost in the multiverse.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-start">
                <Link to="/"
                      className='group relative px-8 py-4
                                  bg-gradient-to-r from-green-500 to-green-600 rounded-lg
                                  font-bold text-white text-lg overflow-hidden
                                  transition-all duration-300 hover:scale-105
                                  hover:shadow-2xl hover:shadow-green-500/50'>
                    <span className="relative z-10">Home Page</span>
                    <div className="absolute inset-0 bg-gradient-to-r
                                from-green-600 to-green-700 opacity-0
                                group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link to="/about"
                      className='group relative px-8 py-4
                                  bg-gradient-to-r from-green-500 to-green-600 rounded-lg
                                  font-bold text-white text-lg overflow-hidden
                                  transition-all duration-300 hover:scale-105
                                  hover:shadow-2xl hover:shadow-green-500/50'>
                    <span className="relative z-10">Explore Characters</span>
                    <div className="absolute inset-0 bg-gradient-to-r
                                from-green-600 to-green-700 opacity-0
                                group-hover:opacity-100 transition-opacity"></div>
                </Link>
            </div>

        </div>
    )
}

export default NotFoundPage