import React from 'react'


const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-gray-900 to-blue-900 py-20">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }}
                ></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                                WUBBA LUBBA
                                <br />
                                <span className="text-5xl md:text-6xl">DUB DUB!</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
                                Explore the Multiverse
                            </p>
                            <p className="text-lg text-gray-400 mb-8 max-w-xl">
                                Discover hundreds of characters from across infinite dimensions.
                                Search, explore, and dive deep into the Rick and Morty universe.
                            </p>

                        </div>


                        <div className="flex-1 flex justify-center items-center gap-8">
                            <div className="relative">
                                <img
                                    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                                    alt="Rick Sanchez"
                                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-green-400 shadow-2xl shadow-green-500/50 transform hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                                    Rick
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                                    alt="Morty Smith"
                                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-yellow-400 shadow-2xl shadow-yellow-500/50 transform hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                                    Morty
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
                        What You Can Do
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature Card 1 */}
                        <div className="group bg-gray-800 p-6 rounded-xl border-2 border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
                            <div className="text-5xl mb-4 text-center">🔍</div>
                            <h3 className="text-xl font-bold mb-3 text-green-400">Search</h3>
                            <p className="text-gray-400">
                                Find any character by name or species across all dimensions
                            </p>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="group bg-gray-800 p-6 rounded-xl border-2 border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
                            <div className="text-5xl mb-4 text-center">👥</div>
                            <h3 className="text-xl font-bold mb-3 text-green-400">Browse</h3>
                            <p className="text-gray-400">
                                Explore hundreds of unique characters from the multiverse
                            </p>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="group bg-gray-800 p-6 rounded-xl border-2 border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
                            <div className="text-5xl mb-4 text-center">📋</div>
                            <h3 className="text-xl font-bold mb-3 text-green-400">Details</h3>
                            <p className="text-gray-400">
                                View comprehensive information about each character
                            </p>
                        </div>

                        {/* Feature Card 4 */}
                        <div className="group bg-gray-800 p-6 rounded-xl border-2 border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
                            <div className="text-5xl mb-4 text-center">🌐</div>
                            <h3 className="text-xl font-bold mb-3 text-green-400">Navigate</h3>
                            <p className="text-gray-400">
                                Seamlessly move between different pages and dimensions
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-5xl font-bold text-green-400 mb-2">800+</div>
                            <div className="text-gray-400 text-lg">Characters</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-yellow-400 mb-2">∞</div>
                            <div className="text-gray-400 text-lg">Dimensions</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-green-400 mb-2">100%</div>
                            <div className="text-gray-400 text-lg">Free</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage