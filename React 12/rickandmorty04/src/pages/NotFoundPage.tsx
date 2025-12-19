import React from 'react'

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

        </div>
    )
}

export default NotFoundPage